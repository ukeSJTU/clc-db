import React from "react";
import { MoleculeProps } from "@/types/molecule";
import {
    MolecularGridLayout,
    MolecularTableLayout,
} from "@/components/OverviewLayouts";

const SearchResultsContainer = ({
    molecules,
}: Readonly<{
    molecules: MoleculeProps[];
}>) => {
    let layout = "card"; // TODO: could be "table"
    // If no molecules are found, display a message
    if (molecules.length === 0) {
        return (
            <div className="col-span-full text-center text-gray-500 dark:text-gray-300">
                No results found.
            </div>
        );
    }

    if (layout === "card") {
        return <MolecularGridLayout molecules={molecules} />;
    }

    return <MolecularTableLayout molecules={molecules} />;
};

export default SearchResultsContainer;
