"use client";

import React, { useState, useEffect, useRef } from "react";
import { SelectDownloadButton } from "@/components/DownloadButtons";
import TableOfContentsNav from "@/components/detailpage/TableOfContentsNav";
import MoleculeHeader from "@/components/detailpage/MoleculeHeader";
import Molecule2DViewer from "@/components/Molecule2DViewer";
import Molecule3DViewer from "@/components/Molecule3DViewer";
import MoleculeBasicInfoTable from "@/components/detailpage/BasicInfoTable";
import MoleculePropertiesTable from "@/components/detailpage/PropertiesTable";

import api from "@/utils/api";
import { MoleculeProps } from "@/types/molecule";

const sections = [
    { id: "molecule-name", label: "Molecule Name" },
    { id: "basic-info", label: "Basic Information" },
    { id: "image", label: "Image" },
    { id: "structure", label: "3D Structure" },
    { id: "properties", label: "Properties" },
    { id: "description", label: "Description" },
];

const MoleculeDetailPage = ({ params }: { params: { casid: string } }) => {
    const [molecule, setMolecule] = useState<MoleculeProps | null>(null);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleSearch = async () => {
            try {
                const response = await api.get(
                    `/search/molecules?cas_id=${params.casid}`
                );
                const { results } = response.data;
                if (results.length > 0) {
                    setMolecule(results[0]);
                } else {
                    setMolecule(null);
                }
            } catch (error) {
                console.error("Failed to fetch molecules", error);
                setMolecule(null);
            }
        };

        handleSearch();
    }, [params.casid]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset + window.innerHeight / 2;
            const sections = Array.from(
                contentRef.current?.querySelectorAll("section") || []
            );

            const activeSection = sections.findLast((section) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                return (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                );
            });

            setActiveSection(activeSection?.id || null);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!molecule) {
        return <div>Loading...</div>;
    }

    const sdfFiles = [`${process.env.NEXT_PUBLIC_STATIC}/all_sdfs/${molecule.cas_id}.sdf`];

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="grid grid-cols-[250px_1fr] gap-4 lg:gap-8 p-4 lg:p-8 relative">
                {/* Table of Contents */}
                <TableOfContentsNav sections={sections} />

                {/* Main content */}
                <div
                    ref={contentRef}
                    className="overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 lg:p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
                >
                    {/* Download Button positioned above the main content */}
                    <div className="mb-4 flex justify-end">
                        <SelectDownloadButton
                            molecules={[molecule]}
                            sdfFiles={sdfFiles}
                        />
                    </div>

                    {/* Sections displaying molecule details */}
                    <div className="space-y-8">
                        <section id="molecule-name">
                            <MoleculeHeader molecule={molecule} />
                        </section>
                        <section id="basic-info">
                            <MoleculeBasicInfoTable molecule={molecule} />
                        </section>
                        <section id="image">
                            <h3 className="text-xl font-semibold">Image</h3>
                            <Molecule2DViewer molecule={molecule} />
                        </section>
                        <section id="structure" className="mt-6">
                            <h3 className="text-xl font-semibold">
                                3D Structure
                            </h3>
                            <div className="w-full lg:w-3/4 h-[300px] lg:h-[400px] rounded-lg">
                                <Molecule3DViewer casId={molecule.cas_id} />
                            </div>
                        </section>
                        <section id="properties">
                            <MoleculePropertiesTable molecule={molecule} />
                        </section>
                        <section id="description">
                            <h3 className="text-xl font-semibold">
                                Description
                            </h3>
                            <small className="text-xs text-gray-500 dark:text-gray-400">
                                Note: the description below is generated by
                                GPT-4o.
                            </small>
                            <p className="text-gray-700">
                                {molecule.description}
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoleculeDetailPage;
