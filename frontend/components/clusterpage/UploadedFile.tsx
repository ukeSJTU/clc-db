import React from "react";
import { Button } from "@/components/ui/button";

interface UploadedFileProps {
    file: File;
    onDelete: () => void;
}

const UploadedFile: React.FC<UploadedFileProps> = ({ file, onDelete }) => {
    return (
        <div className="flex items-center justify-between p-2 border rounded shadow-sm">
            <div>
                <p className="font-semibold">{file.name}</p>
                <p className="text-sm text-gray-500">
                    {(file.size / 1024).toFixed(2)} KB
                </p>
            </div>
            <Button variant="ghost" size="sm" onClick={onDelete}>
                Delete
            </Button>
        </div>
    );
};

export default UploadedFile;
