// This file handles the download functionality for the application.
// It provides functions to generate and download CSV and SDF files, as well as a combined ZIP file containing both.
// The `downloadFiles` function takes the type of file to download, an array of molecule objects, and an array of SDF file URLs as arguments.
// It then calls the appropriate function to generate and download the selected file type.
// Note that a "missing_files.txt" file is included in the ZIP archive if any SDF files are missing.

import { MoleculeProps } from "@/types/molecule";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const escapeCsvField = (field: string): string => {
    if (field.includes(",") || field.includes('"') || field.includes("\n")) {
        return `"${field.replace(/"/g, '""')}"`;
    }
    return field;
};

const generateCsvContent = (molecules: MoleculeProps[]) => {
    const csvHeaders = [
        "Name",
        "CAS ID",
        "PubChem CID",
        "Category",
        "URL",
        "PubChem URL",
        "SMILES",
        "Chirality",
        "Description",
        "SMILES IUPAC",
        "Molecule Formula",
        "Molecular Weight",
        "Heavy Atom Count",
        "Ring Count",
        "Hydrogen Bond Acceptor Count",
        "Hydrogen Bond Donor Count",
        "Rotatable Bond Count",
    ];

    const csvRows = molecules.map((molecule) => {
        const categories =
            molecule.category?.map((type) => type.name).join(", ") || "";
        const chiralities =
            molecule.chirality?.map((type) => type.name).join(", ") || "";
        return [
            escapeCsvField(molecule.name || ""),
            escapeCsvField(molecule.cas_id || ""),
            escapeCsvField(molecule.pubchem_cid || ""),
            escapeCsvField(categories),
            escapeCsvField(molecule.url || ""),
            escapeCsvField(molecule.pubchem_url || ""),
            escapeCsvField(molecule.smiles || ""),
            escapeCsvField(chiralities),
            escapeCsvField(molecule.description || ""),
            escapeCsvField(molecule.smiles_iupac || ""),
            escapeCsvField(molecule.molecule_formula || ""),
            molecule.molecular_weight?.toFixed(3) || "",
            molecule.heavy_atom_count?.toString() || "",
            molecule.ring_count?.toString() || "",
            molecule.hydrogen_bond_acceptor_count?.toString() || "",
            molecule.hydrogen_bond_donor_count?.toString() || "",
            molecule.rotatable_bond_count?.toString() || "",
        ];
    });

    return [csvHeaders, ...csvRows].map((row) => row.join(",")).join("\n");
};

const downloadCsv = (molecules: MoleculeProps[]) => {
    const csvContent = generateCsvContent(molecules);
    const defaultFileName =
        molecules.length === 1 ? molecules[0].cas_id : "molecules";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, `${defaultFileName}.csv`);
};

const downloadSdf = async (
    sdfFiles: string[],
    defaultFileName: string = "molecules_sdf"
): Promise<{ success: boolean; missingFiles: string[] }> => {
    const zip = new JSZip();
    let missingFiles = [];

    for (const [index, sdfUrl] of sdfFiles.entries()) {
        try {
            const response = await fetch(sdfUrl);
            if (!response.ok) {
                missingFiles.push(`Missing SDF: ${sdfUrl}`);
                continue;
            }
            const text = await response.text();
            zip.file(`molecule_${index + 1}.sdf`, text);
        } catch {
            missingFiles.push(`Missing SDF: ${sdfUrl}`);
        }
    }

    // Add a missing report if there are any missing files
    if (missingFiles.length > 0) {
        zip.file("missing_files.txt", missingFiles.join("\n"));
    }

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `${defaultFileName}.zip`);

    return { success: missingFiles.length === 0, missingFiles };
};

const downloadBoth = async (
    molecules: MoleculeProps[],
    sdfFiles: string[]
): Promise<{ success: boolean; missingFiles: string[] }> => {
    const zip = new JSZip();
    let missingFiles = [];

    // Use CAS ID of the first molecule or a generic name if more than one
    const defaultFileName =
        molecules.length === 1 ? molecules[0].cas_id : "molecules_data";

    // Add CSV file
    const csvContent = generateCsvContent(molecules);
    zip.file(`${defaultFileName}.csv`, csvContent);

    // Add SDF files
    for (const [index, sdfUrl] of sdfFiles.entries()) {
        try {
            const response = await fetch(sdfUrl);
            if (!response.ok) {
                missingFiles.push(`Missing SDF: ${sdfUrl}`);
                continue;
            }
            const text = await response.text();
            zip.file(`${molecules[index].cas_id}.sdf`, text);
        } catch {
            missingFiles.push(`Missing SDF: ${sdfUrl}`);
        }
    }

    // Add a missing report if there are any missing files
    if (missingFiles.length > 0) {
        zip.file("missing_files.txt", missingFiles.join("\n"));
    }

    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, `${defaultFileName}.zip`);

    return { success: missingFiles.length === 0, missingFiles };
};

const downloadFiles = async (
    type: string,
    molecules: MoleculeProps[],
    sdfFiles: string[]
): Promise<{ success: boolean; missingFiles: string[] }> => {
    const defaultFileName =
        molecules.length === 1 ? molecules[0].cas_id : "molecules";

    try {
        switch (type) {
            case "csv":
                await downloadCsv(molecules);
                return { success: true, missingFiles: [] };
            case "sdf":
                const { success, missingFiles } = await downloadSdf(
                    sdfFiles,
                    defaultFileName
                );
                return { success, missingFiles };
            case "zip":
                const result = await downloadBoth(molecules, sdfFiles);
                return result;
            default:
                console.error("Unknown download type:", type);
                return { success: false, missingFiles: [] };
        }
    } catch (error) {
        console.error("Download error:", error);
        return { success: false, missingFiles: [] };
    }
};
export default downloadFiles;
