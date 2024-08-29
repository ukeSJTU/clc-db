import React from "react";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { ClusterFormSchema } from "@/types/form";

interface ClusteringExampleSettingsProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const ClusterParamsSheet: React.FC<ClusteringExampleSettingsProps> = ({
    open,
    onOpenChange,
}) => {
    const { getValues } = useFormContext<ClusterFormSchema>();

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Clustering Example Settings</SheetTitle>
                    <SheetDescription>
                        These are the parameter settings used in the clustering
                        example.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="descriptor" className="text-right">
                            Descriptor
                        </Label>
                        <Select value={getValues("descriptor")} disabled>
                            <SelectTrigger className="col-span-3">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="E3FP">E3FP</SelectItem>
                                <SelectItem value="RDKit">Morgan</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="bits" className="text-right">
                            Bits
                        </Label>
                        <Input
                            id="bits"
                            type="number"
                            value={getValues("bits")}
                            className="col-span-3"
                            readOnly
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="radius" className="text-right">
                            Radius
                        </Label>
                        <Input
                            id="radius"
                            type="number"
                            step="0.1"
                            value={getValues("radius")}
                            className="col-span-3"
                            readOnly
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="rdkitInv" className="text-right">
                            Morgan Invariants
                        </Label>
                        <Switch
                            id="rdkitInv"
                            checked={getValues("rdkitInv")}
                            className="col-span-3"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="rdkitRadius" className="text-right">
                            Morgan Radius
                        </Label>
                        <Input
                            id="rdkitRadius"
                            type="number"
                            value={getValues("rdkitRadius")}
                            className="col-span-3"
                            readOnly
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                            htmlFor="rdkitUseFeatures"
                            className="text-right"
                        >
                            Morgan Use Features
                        </Label>
                        <Switch
                            id="rdkitUseFeatures"
                            checked={getValues("rdkitUseFeatures")}
                            className="col-span-3"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                            htmlFor="rdkitUseBondTypes"
                            className="text-right"
                        >
                            Morgan Use Bond Types
                        </Label>
                        <Switch
                            id="rdkitUseBondTypes"
                            checked={getValues("rdkitUseBondTypes")}
                            className="col-span-3"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label
                            htmlFor="rdkitUseChirality"
                            className="text-right"
                        >
                            Morgan Use Chirality
                        </Label>
                        <Switch
                            id="rdkitUseChirality"
                            checked={getValues("rdkitUseChirality")}
                            className="col-span-3"
                            disabled
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="reductionMethod" className="text-right">
                            Reduction Method
                        </Label>
                        <Select value={getValues("reductionMethod")} disabled>
                            <SelectTrigger className="col-span-3">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="PCA">PCA</SelectItem>
                                <SelectItem value="TSNE">TSNE</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="clusterMethod" className="text-right">
                            Cluster Method
                        </Label>
                        <Select value={getValues("clusterMethod")} disabled>
                            <SelectTrigger className="col-span-3">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="K-Means">K-Means</SelectItem>
                                <SelectItem value="DBSCAN">DBSCAN</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="clusters" className="text-right">
                            Clusters
                        </Label>
                        <Input
                            id="clusters"
                            type="number"
                            value={getValues("clusters")}
                            className="col-span-3"
                            readOnly
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="knnAlgro" className="text-right">
                            KNN Algorithm
                        </Label>
                        <Select value={getValues("knnAlgro")} disabled>
                            <SelectTrigger className="col-span-3">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="lloyd">Lloyd</SelectItem>
                                <SelectItem value="elkan">Elkan</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="eps" className="text-right">
                            Epsilon (EPS)
                        </Label>
                        <Input
                            id="eps"
                            type="number"
                            step="0.01"
                            value={getValues("eps")}
                            className="col-span-3"
                            readOnly
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="minSamples" className="text-right">
                            Minimum Samples
                        </Label>
                        <Input
                            id="minSamples"
                            type="number"
                            value={getValues("minSamples")}
                            className="col-span-3"
                            readOnly
                        />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button
                            type="button"
                            onClick={() => onOpenChange(false)}
                        >
                            Close
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default ClusterParamsSheet;
