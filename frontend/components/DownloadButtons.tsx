"use client";

// This file contains multiple types of download buttons that can be used to download molecules in different formats.
// Note that, even if user choose to download .sdf file, they will get a .zip file containing the .sdf files.

import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import downloadFiles from "@/lib/download";
import { MoleculeProps } from "@/types/molecule";
import { DownloadIcon } from "lucide-react";
import { FileTextIcon, ArchiveIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

// BaseDownloadButton is a simpler version of DownloadButton that doesn't include a dropdown
interface BaseDownloadButtonProps {
    type: "csv" | "sdf" | "zip"; // The type of file to download
    molecules: MoleculeProps[];
    sdfFiles: string[];
    label?: string;
    icon?: React.ReactNode;
}

const BaseDownloadButton: React.FC<BaseDownloadButtonProps> = ({
    type,
    molecules,
    sdfFiles,
    label = "Download",
    icon = <DownloadIcon />,
}) => {
    const { toast } = useToast();

    const handleDownload = async () => {
        const { success, missingFiles } = await downloadFiles(
            type,
            molecules,
            sdfFiles
        );
        if (success) {
            toast({
                title: "Download Successful",
                description: `Your ${type.toUpperCase()} file(s) have been downloaded.`,
            });
        } else if (missingFiles.length > 0) {
            toast({
                title: "Missing Files",
                description: `The following SDF files were missing: ${missingFiles.join(
                    ", "
                )}`,
                variant: "warning",
            });
        } else {
            toast({
                title: "Download Failed",
                description: "An error occurred while downloading the file(s).",
                variant: "destructive",
            });
        }
    };

    return (
        <Button variant="outline" onClick={handleDownload} title={label}>
            <div className="flex items-center gap-2">
                {icon}
                <span>{label}</span>
            </div>
        </Button>
    );
};

// SelectDownloadButton is a download button that allows the user to select the download type
interface SelectDownloadButtonProps {
    molecules: MoleculeProps[];
    sdfFiles: string[]; // Array of URLs or paths to .sdf files
}
const SelectDownloadButton: React.FC<SelectDownloadButtonProps> = ({
    molecules,
    sdfFiles,
}) => {
    const [downloadOption, setDownloadOption] = useState("zip");

    const { toast } = useToast();

    const handleDownload = async () => {
        const { success, missingFiles } = await downloadFiles(
            downloadOption,
            molecules,
            sdfFiles
        );
        if (success) {
            toast({
                title: "Download Successful",
                description: `Your ${downloadOption.toUpperCase()} file(s) have been downloaded.`,
            });
        } else if (missingFiles.length > 0) {
            toast({
                title: "Missing Files",
                description: `The following SDF files were missing: ${missingFiles.join(
                    ", "
                )}`,
                variant: "warning",
            });
        } else {
            toast({
                title: "Download Failed",
                description: "An error occurred while downloading the file(s).",
                variant: "destructive",
            });
        }
    };

    return (
        <div className="flex flex-row gap-2 items-center">
            <Select
                onValueChange={(value) => setDownloadOption(value)}
                defaultValue="zip"
            >
                <SelectTrigger>
                    <SelectValue placeholder="Download Both (ZIP)" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="csv">CSV</SelectItem>
                    <SelectItem value="sdf">SDF</SelectItem>
                    <SelectItem value="zip">Both</SelectItem>
                </SelectContent>
            </Select>
            {/* Add a button to manually trigger the download */}
            <Button onClick={handleDownload} title="Download">
                <DownloadIcon />
            </Button>
        </div>
    );
};

// SingleMoleculeDownloadButton is a download button for a single molecule
interface SingleMoleculeDownloadButtonProps {
    molecule: MoleculeProps;
    sdfFile: string;
    type: "csv" | "sdf" | "zip";
}
const SingleMoleculeDownloadButton: React.FC<
    SingleMoleculeDownloadButtonProps
> = ({ molecule, sdfFile, type }) => {
    return (
        <BaseDownloadButton
            type={type}
            molecules={[molecule]}
            sdfFiles={[sdfFile]}
            label={`${type.toUpperCase()}`}
        />
    );
};

// BulkMoleculeDownloadButton is a download button for multiple molecules
interface BulkMoleculeDownloadButtonProps {
    molecules: MoleculeProps[];
    sdfFiles: string[];
    type: "csv" | "sdf" | "zip";
}
const BulkMoleculeDownloadButton: React.FC<BulkMoleculeDownloadButtonProps> = ({
    molecules,
    sdfFiles,
    type,
}) => {
    return (
        <BaseDownloadButton
            type={type}
            molecules={molecules}
            sdfFiles={sdfFiles}
            label={`${type.toUpperCase()}`}
        />
    );
};

// CsvDownloadButton is a download button for CSV files
interface CsvDownloadButtonProps {
    molecules: MoleculeProps[];
    sdfFiles: string[];
}
const CsvDownloadButton: React.FC<CsvDownloadButtonProps> = ({
    molecules,
    sdfFiles,
}) => {
    return (
        <BaseDownloadButton
            type="csv"
            molecules={molecules}
            sdfFiles={sdfFiles}
            label="CSV"
            icon={<FileTextIcon />}
        />
    );
};

// ZipDownloadButton is a download button for ZIP files
interface ZipDownloadButtonProps {
    molecules: MoleculeProps[];
    sdfFiles: string[];
}
const ZipDownloadButton: React.FC<ZipDownloadButtonProps> = ({
    molecules,
    sdfFiles,
}) => {
    return (
        <BaseDownloadButton
            type="zip"
            molecules={molecules}
            sdfFiles={sdfFiles}
            label="CSV+SDF"
            icon={<ArchiveIcon />}
        />
    );
};

export {
    SelectDownloadButton,
    BaseDownloadButton,
    SingleMoleculeDownloadButton,
    BulkMoleculeDownloadButton,
    CsvDownloadButton,
    ZipDownloadButton,
};
