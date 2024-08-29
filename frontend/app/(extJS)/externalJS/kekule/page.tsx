"use client";

import { Button } from "@/components/ui/button";
import { Kekule } from "kekule";
import "kekule/theme/default";
import React, { useEffect, useRef, useState } from "react";

interface KekuleComponentProps {
    onSmilesInput: (smiles: string) => void;
}

const KekuleComponent: React.FC<KekuleComponentProps> = ({ onSmilesInput }) => {
    const containerRef = useRef(null); // DOM container for the composer
    const composerRef = useRef(null); // Ref to store the composer instance
    const [smiles, setSmiles] = useState(""); // State to store SMILES string

    useEffect(() => {
        // Initialize the Composer only once and store it in the ref
        if (containerRef.current && !composerRef.current) {
            let composer = new Kekule.Editor.Composer(containerRef.current);
            composer.setDimension("600px", "400px");
            composerRef.current = composer; // Store the composer instance

            // Optional: Load a default molecule or setup composer here
            // This is a good place to set up your initial molecule if needed
        }
    }, []);

    // Function to log molecule info
    const logMoleculeInfo = () => {
        if (composerRef.current) {
            const chemDoc = composerRef.current.getChemObj();
            const mol = chemDoc.getChildAt(0); // Assuming the molecule is the first child
            const newSmiles = Kekule.IO.saveFormatData(mol, "smi");
            console.log("SMILES: ", newSmiles);
            setSmiles(newSmiles); // Update state
            onSmilesInput(newSmiles); // Call the onSmilesInput prop with the SMILES string
        } else {
            console.log("Composer not initialized");
        }
    };

    return (
        <div>
            <div
                ref={containerRef}
                style={{ width: "600px", height: "400px" }}
            ></div>
            <div className="flex">
                <Button onClick={logMoleculeInfo}>Log Molecule Info</Button>
                <p>{smiles}</p>
            </div>
        </div>
    );
};

export default KekuleComponent;
