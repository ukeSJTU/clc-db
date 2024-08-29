import React from "react";
import { MoleculeProps } from "@/types/molecule";
import CategoryBadge from "../CategoryBadge";

const MoleculeBasicInfoTable = ({ molecule }: { molecule: MoleculeProps }) => {
    return (
        <div className="overflow-x-auto">
            <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
            <table className="w-full table-auto">
                <tbody>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">
                            Molecule Name
                        </td>
                        <td className="py-2">{molecule.name}</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">CAS ID</td>
                        <td className="py-2">{molecule.cas_id}</td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">PubChem CID</td>
                        <td className="py-2">
                            {molecule.pubchem_cid === undefined ||
                            molecule.pubchem_cid === "0"
                                ? "N/A"
                                : molecule.pubchem_cid}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">Category</td>
                        <td className="py-2">
                            <div className="flex flex-wrap">
                                {molecule.category.map((type, index) => (
                                    <CategoryBadge
                                        key={index}
                                        category={type}
                                        abbreviate={false}
                                    />
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">Type of Chirality</td>
                        <td className="py-2">
                            <div className="flex flex-wrap">
                                {molecule.chirality?.map((type, index) => (
                                    <span key={index}>
                                        {type.name}
                                        {index <
                                            molecule.chirality.length - 1 &&
                                            ", "}
                                    </span>
                                ))}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">URL</td>
                        <td className="py-2">
                            {molecule.url !== "nan" ? (
                                <a
                                    href={molecule.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {molecule.url}
                                </a>
                            ) : (
                                "N/A"
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">PubChem URL</td>
                        <td className="py-2">
                            {molecule.pubchem_url !== "nan" ? (
                                <a
                                    href={molecule.pubchem_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    {molecule.pubchem_url}
                                </a>
                            ) : (
                                "N/A"
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td className="py-2 pr-4 font-semibold">SMILES</td>
                        <td className="py-2">{molecule.smiles}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MoleculeBasicInfoTable;
