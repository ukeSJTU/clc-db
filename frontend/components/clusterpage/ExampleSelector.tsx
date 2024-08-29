import React from "react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { clusterFormSchema } from "@/types/form";
import JSZip from "jszip";
import { saveAs } from "file-saver";

interface ExampleSelectorProps {
    onExampleClick: (data: z.infer<typeof clusterFormSchema>) => void;
    isLoading: boolean;
}

const ExampleSelector: React.FC<ExampleSelectorProps> = ({
    onExampleClick,
    isLoading,
}) => {
    const defaultExampleFiles = [
        "1027476-96-5.sdf",
        "1069114-12-0.sdf",
        "114026-76-5.sdf",
        "1186602-28-7.sdf",
        "1191451-23-6.sdf",
        "121788-77-0.sdf",
        "1221902-06-2.sdf",
        "122833-58-3.sdf",
        "1263205-96-4.sdf",
        "1263205-97-5.sdf",
        "1264520-30-0.sdf",
        "128249-70-7.sdf",
        "131180-52-4.sdf",
        "131833-93-7.sdf",
        "133545-16-1.sdf",
        "133545-24-1.sdf",
        "1361563-40-7.sdf",
        "1365531-85-6.sdf",
        "1370549-65-7.sdf",
        "1373432-13-3.sdf",
        "139139-93-8.sdf",
        "1428328-51-1.sdf",
        "1441830-74-5.sdf",
        "147253-67-6.sdf",
        "148461-13-6.sdf",
        "1508306-37-3.sdf",
        "150971-45-2.sdf",
        "1542796-14-4.sdf",
        "155155-73-0.sdf",
        "157488-65-8.sdf",
        "163169-10-6.sdf",
        "166172-60-7.sdf",
        "167416-28-6.sdf",
        "174291-96-4.sdf",
        "176097-24-8.sdf",
        "176298-44-5.sdf",
        "1800190-39-9.sdf",
        "1884594-02-8.sdf",
        "1932110-51-4.sdf",
        "1945966-28-8.sdf",
        "2016814-98-3.sdf",
        "2058236-52-3.sdf",
        "2067322-23-8.sdf",
        "2068819-66-7.sdf",
        "2097438-96-3.sdf",
        "2129645-31-2.sdf",
        "219583-87-6.sdf",
        "2241598-33-2.sdf",
        "2242702-44-7.sdf",
        "2247513-10-4.sdf",
        "23190-16-1.sdf",
        "2351219-88-8.sdf",
        "2361262-51-1.sdf",
        "238759-98-3.sdf",
        "2490297-23-7.sdf",
        "2495023-58-8.sdf",
        "2565792-21-2.sdf",
        "2565792-23-4.sdf",
        "2565792-31-4.sdf",
        "2565792-78-9.sdf",
        "259105-54-9.sdf",
        "2634687-55-9.sdf",
        "2634687-56-0.sdf",
        "2634687-69-5.sdf",
        "2634687-80-0.sdf",
        "2634687-84-4.sdf",
        "2757082-02-1.sdf",
        "2757082-77-0.sdf",
        "2757083-28-4.sdf",
        "2757083-62-6.sdf",
        "2757084-62-9.sdf",
        "2757085-87-1.sdf",
        "2757287-30-0.sdf",
        "278173-23-2.sdf",
        "2828431-96-3.sdf",
        "2828432-01-3.sdf",
        "2828432-14-8.sdf",
        "2828444-14-8.sdf",
        "313342-24-4.sdf",
        "330443-74-8.sdf",
        "361342-55-4.sdf",
        "376355-58-7.sdf",
        "410092-98-7.sdf",
        "444667-33-8.sdf",
        "460748-85-0.sdf",
        "477351-96-5.sdf",
        "477559-80-1.sdf",
        "500785-89-7.sdf",
        "541549-95-5.sdf",
        "58520-03-9.sdf",
        "615247-86-4.sdf",
        "77876-39-2.sdf",
        "791616-63-2.sdf",
        "802902-36-9.sdf",
        "849924-49-8.sdf",
        "850444-36-9.sdf",
        "877773-30-3.sdf",
        "913699-13-5.sdf",
        "942939-38-0.sdf",
        "947337-17-9.sdf",
    ];

    const fetchExampleFiles = async (exampleFiles?: string[]) => {
        if (!exampleFiles) {
            exampleFiles = defaultExampleFiles;
        }
        return await Promise.all(
            exampleFiles.map(async (fileName) => {
                const response = await fetch(
                    `https://compbio.sjtu.edu.cn/services/clc-db/static/cluster/example_data/${fileName}`
                );
                const blob = await response.blob();
                return new File([blob], fileName, {
                    type: "chemical/x-mdl-sdfile",
                });
            })
        );
    };

    const handleDefaultExample = async () => {
        const files = await fetchExampleFiles();
        onExampleClick({
            selectedFiles: files,
            descriptor: "E3FP",
            bits: 1024,
            radius: 1.5,
            rdkitInv: true,
            rdkitRadius: 2,
            rdkitUseFeatures: false,
            rdkitUseBondTypes: false,
            rdkitUseChirality: false,
            reductionMethod: "PCA",
            clusterMethod: "K-Means",
            clusters: 5,
            knnAlgro: "lloyd",
            eps: 0.25,
            minSamples: 5,
        });
    };

    const handleKnnExample = async () => {
        const files = await fetchExampleFiles();
        onExampleClick({
            selectedFiles: files,
            descriptor: "RDKit",
            bits: 1024,
            radius: 1.5,
            rdkitInv: true,
            rdkitRadius: 2,
            rdkitUseFeatures: false,
            rdkitUseBondTypes: false,
            rdkitUseChirality: false,
            reductionMethod: "PCA",
            clusterMethod: "K-Means",
            clusters: 5,
            knnAlgro: "lloyd",
            eps: 0.25,
            minSamples: 5,
        });
    };

    const handleDownloadExamples = async () => {
        const zip = new JSZip();
        const exampleFiles = defaultExampleFiles;

        await Promise.all(
            exampleFiles.map(async (fileName) => {
                const response = await fetch(
                    `/cluster/example_data/${fileName}`
                );
                const blob = await response.blob();
                zip.file(fileName, blob);
            })
        );

        const content = await zip.generateAsync({ type: "blob" });
        saveAs(content, "cluster-example.zip");
    };

    return (
        <div className="flex flex-row items-center space-x-4">
            <h3 className="text-lg font-semibold">Select an Example:</h3>
            <div className="space-x-2 flex flex-row">
                <Button onClick={handleDefaultExample} disabled={isLoading}>
                    E3FP Example
                </Button>
                <Button onClick={handleKnnExample} disabled={isLoading}>
                    Morgan Example
                </Button>
                <Button onClick={handleDownloadExamples} disabled={isLoading}>
                    Download Examples
                </Button>
            </div>
        </div>
    );
};

export default ExampleSelector;
