// This is a simple component that displays a molecule formula in a more readable format.

import React from "react";

interface MoleculeFormulaSpanProps {
    formula?: string; // Optional in case of empty or undefined input
}

const MoleculeFormulaSpan: React.FC<MoleculeFormulaSpanProps> = ({
    formula,
}) => {
    if (!formula || formula.trim() === "" || formula === "N/A") {
        return <span>N/A</span>; // Return "N/A" for empty or invalid formula
    }

    // Regex to match elements and numbers
    const formulaParts = Array.from(formula.matchAll(/([A-Z][a-z]*)(\d*)/g));

    return (
        <p>
            {formulaParts.map(([_, element, count], index) => (
                <span key={index}>
                    {element}
                    {count && <sub>{count}</sub>}
                </span>
            ))}
        </p>
    );
};

export default MoleculeFormulaSpan;
