"use client";

import { useEffect, useState } from "react";
import OverviewContainer from "@/components/OverviewContainer";
import { MoleculeProps } from "@/types/molecule";
import api from "@/utils/api";
import { Button } from "@/components/ui/button";
import downloadFiles from "@/lib/download";
import CategoryBadge from "@/components/CategoryBadge";
import { useToast } from "@/components/ui/use-toast";

const CategoryDownloadPage = ({ params }: { params: { category: string } }) => {
    const [molecules, setMolecules] = useState<MoleculeProps[]>([]);
    const [paginationState, setPaginationState] = useState({
        page: 1,
        pageSize: 12,
        totalPages: 0,
    });
    const { toast } = useToast();
    const decodedClassType = decodeURIComponent(params.category);

    // Fetch molecules for the current page
    useEffect(() => {
        const fetchMolecules = async () => {
            const response = await api.get(
                `/search/molecules?category=${params.category}&page=${paginationState.page}&page_size=${paginationState.pageSize}`
            );
            const data = response.data;
            setMolecules(data.results);
            setPaginationState((prevState) => ({
                ...prevState,
                totalPages: Math.ceil(data.count / paginationState.pageSize),
            }));
        };

        fetchMolecules();
    }, [params.category, paginationState.page, paginationState.pageSize]);

    // Download only the current page's molecules
    const handleDownloadPage = async () => {
        // Generate paths for all SDF files in the current page
        const sdfFiles = molecules.map(
            (molecule) => `${process.env.NEXT_PUBLIC_STATIC}/all_sdfs/${molecule.cas_id}.sdf`
        );

        try {
            const { success, missingFiles } = await downloadFiles(
                "zip",
                molecules,
                sdfFiles
            );
            if (success) {
                toast({
                    variant: "default",
                    title: "Download Successful",
                    description:
                        "The current page's molecules have been downloaded.",
                });
            } else if (missingFiles.length > 0) {
                toast({
                    variant: "warning",
                    title: "Missing SDF Files",
                    description: `The following SDF files were missing: ${missingFiles.join(
                        ", "
                    )}`,
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Download Failed",
                    description:
                        "An error occurred while downloading the current page's molecules.",
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Download Failed",
                description:
                    "An error occurred while downloading the current page's molecules.",
            });
        }
    };

    // Download all molecules belonging to this category
    const handleDownloadAll = async () => {
        const allMolecules: MoleculeProps[] = [];
        const sdfFiles: string[] = [];
        let nextPage = 1;
        const allPageSize = 30;

        try {
            let hasNext = true;
            while (hasNext) {
                const response = await api.get(
                    `/search/molecules?category=${params.category}&page=${nextPage}&page_size=${allPageSize}`
                );
                const data = response.data;
                if (data.next === null) {
                    hasNext = false;
                } else {
                    allMolecules.push(...data.results);
                    sdfFiles.push(
                        ...data.results.map(
                            (molecule: MoleculeProps) =>
                                `${process.env.NEXT_PUBLIC_STATIC}/all_sdfs/${molecule.cas_id}.sdf`
                        )
                    );
                    nextPage++;
                }
            }

            const { success, missingFiles } = await downloadFiles(
                "zip",
                allMolecules,
                sdfFiles
            );
            if (success) {
                toast({
                    variant: "default",
                    title: "Download Successful",
                    description:
                        "All molecules belonging to this category have been downloaded.",
                });
            } else if (missingFiles.length > 0) {
                toast({
                    variant: "warning",
                    title: "Missing SDF Files",
                    description: `The following SDF files were missing: ${missingFiles.join(
                        ", "
                    )}`,
                });
            } else {
                toast({
                    variant: "destructive",
                    title: "Download Failed",
                    description:
                        "An error occurred while downloading all molecules.",
                });
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Download Failed",
                description:
                    "An error occurred while downloading all molecules.",
            });
        }
    };

    const handlePaginationChange = (
        newPaginationState: typeof paginationState
    ) => {
        setPaginationState(newPaginationState);
    };

    return (
        <div className="flex flex-col mx-auto gap-4 p-4">
            <div className="flex flex-row justify-center items-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 px-3">
                    Download Page for Molecules of:
                </h2>
                <CategoryBadge
                    category={{ name: decodedClassType }}
                    abbreviate={false}
                />
            </div>
            <OverviewContainer
                molecules={molecules}
                paginationProps={{
                    page: paginationState.page,
                    setPage: (page) =>
                        handlePaginationChange({ ...paginationState, page }),
                    pageSize: paginationState.pageSize,
                    setPageSize: (pageSize) =>
                        handlePaginationChange({
                            ...paginationState,
                            pageSize,
                        }),
                    totalPages: paginationState.totalPages,
                }}
                topLeftComponent={
                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex flex-row space-x-4">
                            {/* Download Page Button */}
                            <Button
                                onClick={handleDownloadPage}
                                variant="secondary"
                            >
                                Download Page
                            </Button>
                            {/* Download All Button */}
                            <Button
                                onClick={handleDownloadAll}
                                variant="secondary"
                            >
                                Download All
                            </Button>
                        </div>
                    </div>
                }
            ></OverviewContainer>
        </div>
    );
};

export default CategoryDownloadPage;
