from django.core.management.base import BaseCommand
from rdkit import Chem
from rdkit.Chem import Draw
import os
from e3fp.conformer.util import mol_from_sdf


class Command(BaseCommand):
    help = "Generate PNG images from SDF files"

    def add_arguments(self, parser):
        # Required argument for input directory
        parser.add_argument(
            "input_dir", type=str, help="Directory containing SDF files"
        )
        # Required argument for output directory
        parser.add_argument(
            "output_dir", type=str, help="Directory to store output PNG files"
        )
        # Optional argument for image size
        parser.add_argument(
            "--size",
            type=int,
            nargs=2,  # Expects two integers
            default=[300, 300],
            help="Specify the size of the output images as two integers: width height",
        )

    def handle(self, *args, **kwargs):
        input_dir = kwargs["input_dir"]
        output_dir = kwargs["output_dir"]
        size = kwargs["size"]

        # Ensure output directory exists
        os.makedirs(output_dir, exist_ok=True)

        # Process files
        file_list = os.listdir(input_dir)
        for file in file_list:
            file_path = os.path.abspath(os.path.join(input_dir, file))
            try:
                mol = mol_from_sdf(file_path)
                output_path = os.path.join(output_dir, f"{file}.png")
                Draw.MolToFile(mol, output_path, size=size)
                self.stdout.write(self.style.SUCCESS(f"Generated image: {output_path}"))
            except (AttributeError, IOError) as e:
                self.stdout.write(
                    self.style.ERROR(f"Failed to process {file}: {str(e)}")
                )
