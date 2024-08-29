"use client";
import React, { useState } from "react";
import { MoleculeProps } from "@/types/molecule";
import {
    MolecularGridLayout,
    MolecularTableLayout,
} from "@/components/OverviewLayouts";
import {
    PaginationComponent,
    PaginationComponentProps,
} from "@/components/Pagination";
import LayoutSwitch from "./LayoutSwitch";

interface SearchResultsContainerProps {
    molecules: MoleculeProps[];
    initialLayout?: "grid" | "table"; // Optional prop to set initial layout
    useLayoutSwitch?: boolean; // Optional prop to enable layout switch
    paginationProps: PaginationComponentProps;
    topLeftComponent?: React.ReactNode; // Optional component for top left corner
    children?: React.ReactNode;
}

const OverviewContainer: React.FC<SearchResultsContainerProps> = ({
    molecules,
    initialLayout = "grid",
    useLayoutSwitch = true,
    paginationProps,
    topLeftComponent,
    children,
}) => {
    const [layout, setLayout] = useState<"grid" | "table">(initialLayout);

    if (molecules.length === 0) {
        return (
            <div className="text-center text-gray-500 dark:text-gray-300 py-8">
                No results found.
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                {/* Top Left Component */}
                <div className="mb-4 sm:mb-0">{topLeftComponent}</div>
                {/* Layout Switch */}
                {useLayoutSwitch && (
                    <div>
                        <LayoutSwitch
                            currentLayout={layout}
                            onToggleLayout={setLayout}
                        />
                    </div>
                )}
            </div>
            {/* Molecule Layout */}
            <div className="overflow-x-auto">
                {layout === "grid" ? (
                    <MolecularGridLayout molecules={molecules} />
                ) : (
                    <MolecularTableLayout molecules={molecules} />
                )}
            </div>
            {/* Pagination Component */}
            <div className="mt-6 flex justify-center">
                <PaginationComponent {...paginationProps} />
            </div>
            {/* Additional Content */}
            {children}
        </div>
    );
};

export default OverviewContainer;
