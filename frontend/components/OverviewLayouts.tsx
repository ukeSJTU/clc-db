import React from "react";
import { useRouter } from "next/navigation";

import { MoleculeProps } from "@/types/molecule";

import { Button } from "@/components/ui/button";
import CategoryBadge from "@/components/CategoryBadge";
import { ZipDownloadButton } from "@/components/DownloadButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MoleculeFormulaSpan from "./MoleculeFormulaSpan";
import Molecule2DViewer from "./Molecule2DViewer";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

// A number of molecules to be displayed
type MoleculesProps = {
    molecules: MoleculeProps[];
};

// This component displays a single row of molecule data
// Modify this component to fit your data structure and desired ui
const MoleculeDataRow = ({ molecule }: { molecule: MoleculeProps }) => {
    const router = useRouter();

    const handleDetail = (cas_id: string) => {
        router.push(`/detail/${cas_id}`);
    };

    return (
        <tr className="hover:bg-gray-300/10">
            {/* Name column with ellipsis if too long */}
            <td
                className="px-6 py-4 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap"
                title={molecule.name}
            >
                {molecule.name}
            </td>
            {/* CAS ID column without truncation */}
            <td className="px-6 py-4 whitespace-nowrap">{molecule.cas_id}</td>
            {/* Category column with ellipsis */}
            <td className="px-6 py-4 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                {molecule.category.length > 0 ? (
                    molecule.category.map((type, idx) => (
                        <CategoryBadge
                            key={idx}
                            category={type}
                            abbreviate={false}
                        />
                    ))
                ) : (
                    <CategoryBadge category={{ name: "None" }} />
                )}
            </td>
            <td className="px-6 py-4">
                <div className="flex flex-row justify-start space-x-2">
                    {/* Download  Button */}
                    <ZipDownloadButton
                        molecules={[molecule]}
                        sdfFiles={[`${process.env.NEXT_PUBLIC_STATIC}/all_sdfs/${molecule.cas_id}.sdf`]}
                    />
                    {/* View Details Button */}
                    <Button
                        variant="outline"
                        color="blue"
                        onClick={() => handleDetail(molecule.cas_id)}
                    >
                        Detail
                    </Button>
                </div>
            </td>
        </tr>
    );
};

// This component displays the molecules in a table layout
const MolecularTableLayout = ({ molecules }: MoleculesProps) => {
    return (
        <div className="shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            CAS ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Operations
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {molecules.map((molecule, index) => (
                        <MoleculeDataRow molecule={molecule} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// This component displays a single molecule card
// Modify this component to fit your data structure and desired ui
const MoleculeCard = (molecule: MoleculeProps) => {
    const router = useRouter();
    const sdfFiles = [`${process.env.NEXT_PUBLIC_STATIC}/all_sdfs/${molecule.cas_id}.sdf`];

    const handleClick = () => {
        router.push(`/detail/${molecule.cas_id}`);
    };

    return (
        <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-64">
            <Card className="h-full flex flex-col flex-grow">
                <CardHeader className="flex flex-col justify-between items-start p-4 border-b">
                    <div className="space-y-1">
                        <CardTitle className="text-lg font-semibold line-clamp-4">
                            {molecule.name}
                        </CardTitle>
                        <p className="text-sm text-gray-500">
                            CAS ID: {molecule.cas_id}
                        </p>
                    </div>
                    <div className="flex flex-wrap mt-2 space-y-1">
                        {molecule.category.map((type, index) => (
                            <CategoryBadge
                                key={index}
                                category={type}
                                abbreviate={false}
                            />
                        ))}
                    </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 flex justify-between">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500">Formula</p>
                                <MoleculeFormulaSpan
                                    formula={molecule.molecule_formula}
                                />
                            </div>
                            <div className="space-y-2 text-right">
                                <p className="text-sm text-gray-500">Weight</p>
                                <p>
                                    {molecule.molecular_weight !== undefined
                                        ? molecule.molecular_weight.toFixed(3)
                                        : "N/A"}
                                </p>
                            </div>
                        </div>
                        <div className="space-y-2 col-span-2">
                            <p className="text-sm text-gray-500">
                                2D Structure
                            </p>
                            <div className="w-full h-full relative flex justify-center">
                                <Molecule2DViewer molecule={molecule} />
                                {/* {molecule.pubchem_cid !== "0" ? (
                                    <div className="relative w-full h-full bg-white">
                                        (
                                        <Image
                                            alt="2D Image"
                                            src={`${process.env.NEXT_PUBLIC_STATIC}/2Dimages/${molecule.cas_id}.sdf.png`}
                                            layout="fill"
                                            objectFit="contain"
                                            className="bg-white"
                                        />
                                        )
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full bg-gray-100 flex justify-center items-center text-gray-400 rounded-3xl">
                                        <Skeleton className="relative w-full h-full flex items-center align-middle">
                                            <p className="text-xl text-center text-gray-700">
                                                No 2D image available
                                            </p>
                                        </Skeleton>
                                    </div>
                                )} */}
                            </div>
                        </div>
                    </div>
                </CardContent>
                <div className="px-4 py-3 bg-gray-50 text-right sm:flex gap-2 justify-between">
                    {/* Download Button */}
                    <ZipDownloadButton
                        molecules={[molecule]}
                        sdfFiles={sdfFiles}
                    />
                    {/* View Details Button */}
                    <Button
                        variant="outline"
                        color="blue"
                        onClick={handleClick}
                    >
                        Detail
                    </Button>
                </div>
            </Card>
        </div>
    );
};

// This component displays the molecules in a grid layout, each is a card
const MolecularGridLayout = ({ molecules }: MoleculesProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-6 mx-auto p-4">
            {molecules.map((molecule: MoleculeProps, index: number) => (
                <MoleculeCard key={index} {...molecule} />
            ))}
        </div>
    );
};

export { MolecularTableLayout, MolecularGridLayout };
