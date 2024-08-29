import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control, Controller } from "react-hook-form";
import UploadedFile from "@/components/clusterpage/UploadedFile";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";

interface FileUploadComponentProps {
    control: Control<any>;
    name: string;
    onFileChange: (files: File[]) => void;
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({
    control,
    name,
    onFileChange,
}) => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const filesPerPage = 8;

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const newFiles = Array.from(event.target.files);
            const updatedFiles = [...uploadedFiles, ...newFiles];
            setUploadedFiles(updatedFiles);
            onFileChange(updatedFiles);
        }
    };

    const handleFileDelete = (index: number) => {
        const updatedFiles = uploadedFiles.filter((_, i) => i !== index);
        setUploadedFiles(updatedFiles);
        onFileChange(updatedFiles);
    };

    const totalPages = Math.ceil(uploadedFiles.length / filesPerPage);
    const paginationDots = Array.from({ length: totalPages }, (_, i) => i);

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <Card className="shadow-md">
                        <AccordionTrigger>
                            <CardHeader>
                                <CardTitle>Step 1. Select Files</CardTitle>
                            </CardHeader>
                        </AccordionTrigger>
                        <AccordionContent>
                            <CardContent>
                                <FormControl>
                                    <div className="flex items-center space-x-4">
                                        <Input
                                            type="file"
                                            accept=".sdf"
                                            multiple
                                            onChange={handleFileChange}
                                            className="w-full"
                                        />
                                        {uploadedFiles.length > 0 && (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() =>
                                                    setUploadedFiles([])
                                                }
                                            >
                                                Clear
                                            </Button>
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                                {uploadedFiles.length > 0 && (
                                    <div className="mt-4">
                                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                            {uploadedFiles
                                                .slice(
                                                    currentPage * filesPerPage,
                                                    (currentPage + 1) *
                                                        filesPerPage
                                                )
                                                .map((file, index) => (
                                                    <UploadedFile
                                                        key={index}
                                                        file={file}
                                                        onDelete={() =>
                                                            handleFileDelete(
                                                                currentPage *
                                                                    filesPerPage +
                                                                    index
                                                            )
                                                        }
                                                    />
                                                ))}
                                        </div>
                                        {totalPages > 1 && (
                                            <div className="mt-4 flex justify-center space-x-2">
                                                {paginationDots.map((page) => (
                                                    <button
                                                        key={page}
                                                        onClick={() =>
                                                            setCurrentPage(page)
                                                        }
                                                        className={`w-3 h-3 rounded-full ${
                                                            currentPage === page
                                                                ? "bg-gray-700"
                                                                : "bg-gray-300"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </AccordionContent>
                    </Card>
                </FormItem>
            )}
        />
    );
};

export default FileUploadComponent;
