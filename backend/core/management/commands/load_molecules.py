from django.core.management.base import BaseCommand
from core.models import Molecule, Category, Chirality
import pandas as pd


class Command(BaseCommand):
    help = "Load molecule data into the database"
    fill_values = {
        "PubChem CID": 0,
        "SMILES": "N/A",
        "SMILES_IUPAC": "N/A",
        "Description": "Officia mollit laborum esse cupidatat enim laboris in aliqua excepteur officia ad quis. Dolore incididunt ad fugiat elit fugiat anim occaecat consequat duis labore. Sunt ullamco est esse qui consectetur qui magna ipsum non reprehenderit sint voluptate aute cillum. Voluptate sunt in ea laboris officia.",
        "MF": "N/A",
        "MW": 0.0,
        "Heavy Atom Count": -1,  # Use -1 for properties that can't be calculated
        "Ring Count": -1,
        "Hydrogen Bond Acceptor Count": -1,
        "Hydrogen Bond Donor Count": -1,
        "Rotatable Bond Count": -1,
        "types of chirality": "N/A",
        "InChI": "N/A",
        "InChIKey": "N/A",
    }

    def add_arguments(self, parser):
        parser.add_argument(
            "-p",
            "--path",
            type=str,
            help="Path to the CSV file",
        )

    def handle(self, *args, **kwargs):
        csv_path = kwargs["path"]
        df = pd.read_csv(csv_path).fillna(self.fill_values)

        # Create or get categories and chirality types from the dataframe
        category_objs = {}
        for category_list in df["Category"].unique():
            categories = [cat.strip() for cat in category_list.split(",")]
            for category in categories:
                if category not in category_objs:
                    category_objs[category], _ = Category.objects.get_or_create(
                        name=category
                    )

        chirality_objs = {}
        for chirality in df["types of chirality"].unique():
            chirality_objs[chirality], _ = Chirality.objects.get_or_create(
                name=chirality
            )

        for idx, row in df.iterrows():
            molecule, created = Molecule.objects.update_or_create(
                cas_id=row["CAS"],
                defaults={
                    "name": row["Name"],
                    "pubchem_cid": str(int(row.get("PubChem CID", 0))),
                    "url": row.get("URL", ""),
                    "pubchem_url": row.get("PubChemURL", ""),
                    "smiles": row.get("SMILES", ""),
                    "smiles_iupac": row.get("SMILES_IUPAC", ""),
                    "molecule_formula": row.get("MF", ""),
                    "molecular_weight": float(row.get("MW", 0)),
                    "description": row.get(
                        "Description",
                    ),
                    "InChI": row.get("InChI"),
                    "InChIKey": row.get("InChIKey"),
                    "heavy_atom_count": (
                        int(row.get("Heavy Atom Count", -1))
                        if row.get("Heavy Atom Count", -1) != -1
                        else None
                    ),  # Use None for properties that can't be calculated
                    "ring_count": (
                        int(row.get("Ring Count", -1))
                        if row.get("Ring Count", -1) != -1
                        else None
                    ),
                    "hydrogen_bond_acceptor_count": (
                        int(row.get("Hydrogen Bond Acceptor Count", -1))
                        if row.get("Hydrogen Bond Acceptor Count", -1) != -1
                        else None
                    ),
                    "hydrogen_bond_donor_count": (
                        int(row.get("Hydrogen Bond Donor Count", -1))
                        if row.get("Hydrogen Bond Donor Count", -1) != -1
                        else None
                    ),
                    "rotatable_bond_count": (
                        int(row.get("Rotatable Bond Count", -1))
                        if row.get("Rotatable Bond Count", -1) != -1
                        else None
                    ),
                },
            )

            categories = [cat.strip() for cat in row["Category"].split(",")]
            molecule.category.set(
                [category_objs[cat] for cat in categories if cat in category_objs]
            )

            chirality = row.get("types of chirality")
            if chirality in chirality_objs:
                molecule.chirality.set([chirality_objs[chirality]])

            molecule.save()
            self.stdout.write(
                self.style.SUCCESS(
                    f"Successfully added/updated molecule: {molecule.name}"
                )
            )
