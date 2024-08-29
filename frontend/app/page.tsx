"use client";

import api from "@/utils/api";
import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect } from "react";

const fetchStatistics = async () => {
    const response = await api.get("/statistics/");
    return response.data;
};

const Home: NextPage = () => {
    const [stats, setStats] = useState({
        totalMolecules: 0,
        totalCategories: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStatistics();
            setStats({
                totalMolecules: data.total_molecules,
                totalCategories: data.total_categories,
            });
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="relative">
                <Image
                    src="/services/clc-db/bgDark.webp"
                    alt="Banner"
                    width={1792}
                    height={256}
                    className="w-full h-64 object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-black bg-opacity-50 py-4 px-8 rounded-md">
                    <h1 className="text-4xl font-bold text-white">
                        Welcome to CLC-DB!
                    </h1>
                </div>
            </div>
            <main className="p-10">
                <section className="container mx-auto p-4">
                    {/* <h1 className="text-4xl font-bold mb-6 text-center">
                        Welcome to CLC-DB!
                    </h1> */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">
                            What Is CLC-DB?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            <span className="font-semibold text-blue-700 text-xl">
                                CLC-DB
                            </span>{" "}
                            (Chiral Ligand and Catalyst Database) is an
                            open-source database providing comprehensive data on
                            chiral ligands and catalysts, aimed at accelerating
                            research and innovation in the field of asymmetric
                            catalysis.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            CLC-DB provides access to
                            <span className="font-semibold text-blue-700">
                                {" "}
                                1861
                            </span>{" "}
                            chiral ligands and catalysts, sourced from
                            authoritative public databases such as PubChem, and
                            categorized into 32 groups with accurately
                            calculated molecular physical and chemical
                            properties by RDKIT and high-quality 3D structures
                            calculated by Gaussian.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Additionally, we offer built-in tools for
                            dimensionality reduction, clustering, and
                            visualization of SDFs from the database and uploads
                            from the user, facilitating ligand screening for
                            drug development or chemical material research.
                        </p>
                        <Image
                            src="/services/clc-db/demo.png"
                            alt="Molecule Structure Demo Picture"
                            width={1200}
                            height={256}
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            Why CLC-DB?
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li className="mb-2">
                                <span className="font-semibold">Reliable.</span>{" "}
                                The computed 3D structures are used to generate
                                molecular fingerprints for clustering.
                                Therefore, ensuring the database&apos;s accuracy
                                is fundamental for guiding experimental work.
                                All molecular conformations are sourced from
                                reputable public databases like PubChem,
                                optimized in an implicit solvent model using the
                                M062X hybrid functional, with all atoms
                                described using the def2-SVP (a double-ζ basis
                                set). All data is manually validated before
                                being included in the database.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">
                                    Efficient.
                                </span>{" "}
                                Beyond basic molecular information, we calculate
                                common molecular properties such as molecular
                                weight using RDKit. Users can easily download a
                                CSV file of all the molecular information and an
                                SDF of 3D conformations. For ligand screening,
                                users can access the embedded clustering page,
                                upload SDF files, adjust hyperparameters, and
                                obtain visualized clustering results with a
                                single click.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Comprehensive.
                                </span>{" "}
                                The database offers thousands of reliable and
                                visualized pieces of information on chiral
                                ligands and catalysts, covering multiple fields
                                such as chemistry, pharmaceuticals, and
                                materials science. It provides abundant data
                                support for researchers.
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
                        <h2 className="text-2xl font-semibold mb-4">
                            How Can CLC-DB Help?
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li className="mb-2">
                                <span className="font-semibold">Search:</span>{" "}
                                The database supports CAS, Name, and SMILES
                                multi-search, and also allows users to draw
                                structures for complex compounds, automatically
                                matching the highest similarity results.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">Download:</span>{" "}
                                All data is available for free download.
                                However, we do not advocate using the data for
                                commercial purposes.
                            </li>
                            <li className="mb-2">
                                <span className="font-semibold">
                                    Understand:
                                </span>{" "}
                                Explore the database&apos;s data to experience
                                its potency and utility.
                            </li>
                            <li>
                                <span className="font-semibold">
                                    Collaboration:
                                </span>{" "}
                                For a deeper understanding of the website, we
                                encourage you to read our article. If you are
                                interested in CLC-DB studies, please feel free
                                to contact us. We are eager to establish
                                partnerships with scholars worldwide.
                            </li>
                        </ul>
                    </div>
                </section>
		<section className="container mx-auto p-4">
		    <div className="bg-white shadow-md rounded-lg p-6">
			<b>Reference:</b> G Yu, K Yu, X Wang, X Huo*, Y Yang*. CLC-DB: an online open-source database of chiral ligands and catalysts. ChemRxiv. 2024; doi:10.26434/chemrxiv-2024-h2rdl.
		    </div>
		</section>
                <section className="container mx-auto p-4 mt-8 bg-blue-100 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold text-center mb-4">
                        Statistics
                    </h2>
                    <div className="flex justify-around">
                        <div className="text-center">
                            <p className="text-4xl font-bold text-blue-600">
                                {stats.totalMolecules}
                            </p>
                            <p className="text-gray-600">Molecules Collected</p>
                        </div>
                        <div className="text-center">
                            <p className="text-4xl font-bold text-blue-600">
                                {stats.totalCategories}
                            </p>
                            <p className="text-gray-600">Categories</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
