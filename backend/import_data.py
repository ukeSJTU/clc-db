import sqlite3
import pandas as pd

CLEAR_DATA = True  # Clear all data in the database before importing new data
if (
    CLEAR_DATA
    and input("Are you sure you want to clear all data in the database? (y/n): ") == "y"
):
    # clear the data but leave the column names
    conn = sqlite3.connect("db.sqlite3")
    cursor = conn.cursor()
    cursor.execute("DELETE FROM core_category")
    cursor.execute("DELETE FROM core_molecule")
    cursor.execute("DELETE FROM core_molecule_class_type")
    cursor.execute("DELETE FROM core_molecule_smiles_type")
    cursor.execute("DELETE FROM core_smile")
    conn.commit()
    conn.close()


# Path to the SQLite database
database_path = "db.sqlite3"

# Excel file path
xlsx_file_path = "data.xlsx"

# Load the data from Excel file into a DataFrame and fill NaNs with a default value
df = pd.read_excel(xlsx_file_path)
df.fillna("无-default", inplace=True)

# Connect to the SQLite database
conn = sqlite3.connect(database_path)
cursor = conn.cursor()

task_id = [1, 2, 3]

# Define delimiters
delim = "、"

#################
# 1. Handle Categories
#################
if 1 in task_id:
    table_name = "core_category"
    df_column_name = "类别"

    unique_categories = set()
    for category_list in df[df_column_name]:
        unique_categories.update(
            [cat.strip() for cat in category_list.split(delim) if cat != "无"]
        )

        if category_list == "无":
            # add a default category
            unique_categories.add("无-default")

    # Create the table if it doesn't exist
    cursor.execute(
        f"CREATE TABLE IF NOT EXISTS {table_name} (id INTEGER PRIMARY KEY, name TEXT)"
    )

    # Insert unique categories into core_category table and remember their IDs
    category_to_id = {}
    for idx, category in enumerate(unique_categories, start=1):
        cursor.execute(f"INSERT INTO {table_name} (name) VALUES (?)", (category,))
        category_to_id[category] = cursor.lastrowid

#################
# 2. Handle SMILE Types
#################
if 2 in task_id:
    table_name = "core_smile"
    df_column_name = "手性种类"

    unique_smiles = set()
    for smile_list in df[df_column_name]:
        unique_smiles.update(
            [smile.strip() for smile in smile_list.split(delim) if smile != "无"]
        )

    # Create the table if it doesn't exist
    cursor.execute(
        f"CREATE TABLE IF NOT EXISTS {table_name} (id INTEGER PRIMARY KEY, smile TEXT)"
    )

    # Insert unique SMILE types into core_smile table and remember their IDs
    smile_to_id = {}
    for idx, smile in enumerate(unique_smiles, start=1):
        cursor.execute(f"INSERT INTO {table_name} (smile) VALUES (?)", (smile,))
        smile_to_id[smile] = cursor.lastrowid

#################
# 3. Import All Molecules
#################
if 3 in task_id:
    table_name = "core_molecule"
    category_table_name = "core_molecule_class_type"
    smile_table_name = "core_molecule_smiles_type"

    corresponding_columns = {
        "Name": "name",
        "CAS号": "cas_id",
        "URL": "url",
        "PubChemURL": "pubchem_url",
        "SMILES": "smiles",
        "备注": "remark",
    }

    # Create the table if it doesn't exist
    cursor.execute(
        f"CREATE TABLE IF NOT EXISTS {table_name} (id INTEGER PRIMARY KEY, name TEXT, cas_id TEXT, url TEXT, pubchem_url TEXT, smiles TEXT, remark TEXT)"
    )
    cursor.execute(
        f"CREATE TABLE IF NOT EXISTS {category_table_name} (id INTEGER PRIMARY KEY, molecule_id INTEGER, category_id INTEGER)"
    )
    cursor.execute(
        f"CREATE TABLE IF NOT EXISTS {smile_table_name} (id INTEGER PRIMARY KEY, molecule_id INTEGER, smile_id INTEGER)"
    )

    for idx, row in df.iterrows():
        # Inserting data into core_molecule
        cursor.execute(
            f"INSERT INTO {table_name} (name, cas_id, url, pubchem_url, smiles, remark) VALUES (?, ?, ?, ?, ?, ?)",
            (
                row["Name"],
                row["CAS号"],
                row["URL"],
                row["PubChemURL"],
                row["SMILES"],
                row["备注"],
            ),
        )
        molecule_id = cursor.lastrowid

        # Inserting data into core_molecule_class_type
        categories = [cat.strip() for cat in row["类别"].split(delim) if cat != "无"]

        if not categories:
            # add a default category
            categories.append("无-default")

        for category in categories:
            cursor.execute(
                f"INSERT INTO {category_table_name} (molecule_id, category_id) VALUES (?, ?)",
                (molecule_id, category_to_id[category]),
            )

        # Inserting data into core_molecule_smiles_type
        smiles = [sm.strip() for sm in row["手性种类"].split(delim) if sm != "无"]
        for smile in smiles:
            cursor.execute(
                f"INSERT INTO {smile_table_name} (molecule_id, smile_id) VALUES (?, ?)",
                (molecule_id, smile_to_id[smile]),
            )

# Commit changes and close the connection
conn.commit()
conn.close()

print("Data imported successfully.")
