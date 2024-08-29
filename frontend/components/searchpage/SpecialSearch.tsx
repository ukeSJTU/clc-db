// This file contains multiple search components.
// The KekuleComponent supports drawing the structure of the molecule and extracting the SMILES string.

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import KekuleComponent from "@/components/searchpage/KekuleComponent";
import { Pen, List, FilePlus2 } from "lucide-react";

interface DrawStructureProps {
    onSubmit: (smiles: string, type: string) => void;
    onClose: () => void;
}

interface CasIdUploaderProps {
    onSubmit: (casIds: string) => void;
    onClose: () => void;
}

interface MultiCasIDSearchProps {
    onSubmit: (casIds: string, type: string) => void;
    onClose: () => void;
}

const DrawStructureComponent: React.FC<DrawStructureProps> = ({
    onSubmit,
    onClose,
}) => {
    const [showKekule, setShowKekule] = useState(false);

    return (
        <div className="flex ">
            <div
                onClick={() => setShowKekule(true)}
                className="hover:bg-gray-200 hover:border-gray-400 rounded-md p-4 cursor-pointer"
            >
                <div className="flex flex-col items-center">
                    <Pen size={50} />
                    Draw Structure
                </div>
            </div>

            {showKekule && (
                <KekuleComponent
                    onSmilesInput={(smiles: string) => {
                        onSubmit(smiles, "smiles");
                        onClose();
                        setShowKekule(false);
                    }}
                    onClose={() => setShowKekule(false)}
                    onSubmit={onSubmit}
                />
            )}
        </div>
    );
};

const CasIdUploader: React.FC<CasIdUploaderProps> = ({ onSubmit, onClose }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files[0]) {
            setFile(files[0]);
        }
    };

    const handleUpload = () => {
        if (!file) {
            alert("Please select a file first."); //TODO: Replace with a proper alert component
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const text = event.target?.result;
            if (typeof text === "string") {
                const casIds = text
                    .split(/[\s,]+/)
                    .filter(Boolean)
                    .join(",");
                onSubmit(casIds); // Trigger the search callback with the CAS IDs
                onClose(); // Close the uploader component
            }
            console.log(text);
        };
        reader.readAsText(file);
    };

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload and Search</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

const MultiCasIDSearchComponent: React.FC<MultiCasIDSearchProps> = ({
    onSubmit,
    onClose,
}) => {
    const [showUploader, setShowUploader] = useState(false);
    return (
        <div className="flex ">
            <div
                onClick={() => setShowUploader(true)}
                className="hover:bg-gray-200 hover:border-gray-400 rounded-md p-4 cursor-pointer"
            >
                <div className="relative flex flex-col items-center">
                    <FilePlus2 size={50} />
                    Multi ID
                </div>
            </div>

            {showUploader && (
                <CasIdUploader
                    onSubmit={(casIds) => {
                        onSubmit(casIds, "cas_id");
                        setShowUploader(false);
                    }}
                    onClose={() => {
                        setShowUploader(false);
                        onClose();
                    }}
                />
            )}
        </div>
    );
};

export { DrawStructureComponent, MultiCasIDSearchComponent };
