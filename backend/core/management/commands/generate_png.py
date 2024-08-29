from django.core.management.base import BaseCommand
from rdkit import Chem
from rdkit.Chem import Draw
import os
import requests
from bs4 import BeautifulSoup
from e3fp.conformer.util import mol_from_sdf
import csv


class Command(BaseCommand):
    help = "Generate PNG images from SDF files and fetch from PubChem and Bidepharm"

    def add_arguments(self, parser):
        # Required argument for input directory
        parser.add_argument(
            "input_dir", type=str, help="Directory containing SDF files"
        )
        # Required argument for output directory
        parser.add_argument(
            "output_dir", type=str, help="Directory to store output PNG files"
        )
        # Required argument for molecule data CSV file
        parser.add_argument(
            "data_csv",
            type=str,
            help="Path to the CSV file containing molecule data",
        )
        # Optional argument for image size
        parser.add_argument(
            "--size",
            type=int,
            nargs=2,
            default=[300, 300],
            help="Specify the size of the output images as two integers: width height",
        )

    def handle(self, *args, **kwargs):
        input_dir = kwargs["input_dir"]
        output_dir = kwargs["output_dir"]
        data_csv = kwargs["data_csv"]
        size = kwargs["size"]

        # Ensure output directory exists
        os.makedirs(output_dir, exist_ok=True)

        # keep track of the status of each molecule
        report_data = []

        # Read molecule data from CSV file
        with open(data_csv, "r") as f:
            reader = csv.DictReader(f)
            for i, row in enumerate(reader):

                cas_id = row["CAS"]
                pubchem_cid = row["PubChem CID"]
                url = row["URL"]  # this is the url for bidepharm

                output_path = os.path.join(output_dir, f"{cas_id}.png")

                # in the final report.csv file, each molecule will have the following columns:
                isSuccessful = False
                sdf_status = ""
                sdf_error = ""
                pubchem_status = ""
                pubchem_error = ""
                bidepharm_status = ""
                bidepharm_error = ""

                if not isSuccessful:
                    # self.stdout.write(f"Generating image from SDF for {cas_id}")
                    try:
                        self.generate_image_from_sdf(
                            input_dir, cas_id, output_path, size
                        )
                        sdf_status = "Success"
                        isSuccessful = True
                    except AssertionError as err:
                        sdf_status = "Failed"
                        sdf_error = "SDF file not found"
                    except Exception as err:
                        self.stderr.write(
                            f"Failed to generate image from SDF for {cas_id}: {str(err)}"
                        )
                        sdf_status = "Failed"
                        sdf_error = str(err)

                if not isSuccessful:
                    # self.stdout.write(f"Fetching image from PubChem for {cas_id}")
                    try:
                        self.fetch_image_from_pubchem(pubchem_cid, cas_id, output_path)
                        pubchem_status = "Success"
                        isSuccessful = True
                    except AssertionError as err:
                        self.stderr.write(f"No PubChem CID available for {cas_id}")
                        pubchem_status = "Failed"
                        pubchem_error = "No PubChem CID available"
                    except Exception as err:
                        self.stderr.write(
                            f"Error occurred while fetching image from PubChem for {cas_id}: {str(err)}"
                        )
                        pubchem_status = "Failed"
                        pubchem_error = str(err)

                if not isSuccessful:
                    # self.stdout.write(f"Fetching image from Bidepharm for {cas_id}")
                    try:
                        self.fetch_image_from_bidepharm(url, cas_id, output_path)
                        bidepharm_status = "Success"
                        isSuccessful = True
                    except AssertionError as e:
                        self.stderr.write(f"No Bidepharm URL available for {cas_id}")
                        bidepharm_status = "Failed"
                        bidepharm_error = "No Bidepharm URL available"
                    except Exception as err:
                        self.stderr.write(
                            f"Error occurred while fetching image from Bidepharm for {cas_id}: {str(err)}"
                        )
                        bidepharm_status = "Failed"
                        bidepharm_error = str(err)

                report_data.append(
                    [
                        str(isSuccessful),
                        cas_id,
                        pubchem_cid,
                        sdf_status,
                        sdf_error,
                        pubchem_status,
                        pubchem_error,
                        bidepharm_status,
                        bidepharm_error,
                    ]
                )

        # Generate report CSV file
        report_file = "report.csv"
        with open(report_file, "w", newline="") as f:
            writer = csv.writer(f)
            writer.writerow(
                [
                    "Status",
                    "CAS ID",
                    "PubChem CID",
                    "SDF to PNG Status",
                    "SDF to PNG Error",
                    "PubChem Status",
                    "PubChem Error",
                    "Bidepharm Status",
                    "Bidepharm Error",
                ]
            )
            writer.writerows(report_data)

    def generate_image_from_sdf(self, input_dir, cas_id, output_path, size):
        file_path = os.path.abspath(os.path.join(input_dir, f"{cas_id}.sdf"))
        assert os.path.exists(file_path), f"SDF file not found for {cas_id}"
        mol = mol_from_sdf(file_path)
        Draw.MolToFile(mol, output_path, size=size)

    def fetch_image_from_pubchem(self, pubchem_cid, cas_id, output_path):
        assert pubchem_cid, "No PubChem CID available"
        pubchem_url = f"https://pubchem.ncbi.nlm.nih.gov/image/imagefly.cgi?cid={pubchem_cid}&width=500&height=500"
        response = requests.get(pubchem_url)
        if response.status_code == 200:
            with open(output_path, "wb") as f:
                f.write(response.content)
        else:
            raise Exception(
                f"Failed to fetch image from PubChem. HTTP status code: {response.status_code}"
            )

    def fetch_image_from_bidepharm(self, url, cas_id, output_path):
        assert url, "No Bidepharm URL available"
        response = requests.get(url)
        if response.status_code == 200:
            image_url = self.extract_image_url(response.text)
            if image_url:
                response = requests.get(image_url)
                if response.status_code == 200:
                    with open(output_path, "wb") as f:
                        f.write(response.content)
                else:
                    raise Exception(
                        f"Failed to fetch image from Bidepharm. HTTP status code: {response.status_code}"
                    )
            else:
                raise Exception("No image URL found on Bidepharm")
        else:
            raise Exception(
                f"Failed to fetch Bidepharm page. HTTP status code: {response.status_code}"
            )

    def extract_image_url(self, html):
        soup = BeautifulSoup(html, "html.parser")

        img_tag = soup.find("div", class_="products-big-img").find("img")
        if img_tag:
            image_url = img_tag["src"]
            return image_url
        return None
