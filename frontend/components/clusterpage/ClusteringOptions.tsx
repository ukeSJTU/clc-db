import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import SliderWithValue from "@/components/SliderWithValue";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Control, Controller } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AccordionContent, AccordionTrigger } from "@/components/ui/accordion";

interface ClusteringOptionsProps {
    control: Control<any>;
    fileListLength: number;
    bits: number;
    clusterMethod: string;
}

const ClusteringOptions: React.FC<ClusteringOptionsProps> = ({
    control,
    fileListLength,
    bits,
    clusterMethod,
}) => {
    return (
        <Card className="mb-4">
            <AccordionTrigger>
                <CardHeader>
                    <CardTitle>Step 4. Clustering Options</CardTitle>
                </CardHeader>
            </AccordionTrigger>
            <AccordionContent>
                <CardContent>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">
                            Dimension Reduction Methods
                        </h4>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>TSNE</strong>: Powerful but time
                                consuming
                            </li>
                            <li>
                                <strong>PCA</strong>: Balanced between
                                performance and time
                            </li>
                        </ul>
                    </div>
                    <FormField
                        control={control}
                        name="reductionMethod"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Embedding Methods</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select an embedding method" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="PCA">PCA</SelectItem>
                                        <SelectItem value="TSNE">
                                            TSNE
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                {field.value === "TSNE" &&
                                    bits > fileListLength && (
                                        <FormMessage className="text-red-500">
                                            Error! When using TSNE, the number
                                            of files must be greater than the
                                            dimension of descriptors.
                                        </FormMessage>
                                    )}
                                {field.value === "TSNE" && (
                                    <FormMessage>
                                        Dimension of descriptors:{" "}
                                        <strong>{bits}</strong>, Number of input
                                        files: <strong>{fileListLength}</strong>
                                    </FormMessage>
                                )}
                            </FormItem>
                        )}
                    />

                    <div className="mb-4">
                        <h4 className="text-lg font-semibold mb-2">
                            Cluster Methods Choice
                        </h4>
                        <ul className="list-disc list-inside">
                            <li>
                                <strong>K-Means:</strong>
                                <p className="text-blue-700 inline">
                                    {" "}
                                    Recommended method
                                </p>
                            </li>
                            <li>
                                <strong>DBSCAN</strong>
                            </li>
                        </ul>
                    </div>
                    <FormField
                        control={control}
                        name="clusterMethod"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cluster Methods</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a cluster method" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="K-Means">
                                            K-Means
                                        </SelectItem>
                                        <SelectItem value="DBSCAN">
                                            DBSCAN
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />

                    {clusterMethod === "K-Means" && (
                        <Card className="mt-4">
                            <CardHeader>
                                <CardTitle>K-Means Parameters</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <FormField
                                    control={control}
                                    name="clusters"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Num of clusters
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    min={2}
                                                    max={
                                                        fileListLength === 0
                                                            ? 10
                                                            : fileListLength - 1
                                                    }
                                                    value={field.value}
                                                    onChange={(e) =>
                                                        field.onChange(
                                                            Number(
                                                                e.target.value
                                                            )
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="knnAlgro"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Algorithm</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select an algorithm" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="lloyd">
                                                        lloyd
                                                    </SelectItem>
                                                    <SelectItem value="elkan">
                                                        elkan
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    )}

                    {clusterMethod === "DBSCAN" && (
                        <Card className="mt-4">
                            <CardHeader>
                                <CardTitle>DBSCAN Parameters</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <FormField
                                    control={control}
                                    name="eps"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>eps</FormLabel>
                                            <FormControl>
                                                {/* <Slider
                                                    min={0}
                                                    max={2}
                                                    step={0.01}
                                                    {...field}
                                                /> */}
                                                <SliderWithValue
                                                    value={field.value}
                                                    min={0}
                                                    max={2}
                                                    step={0.01}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="minSamples"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>min_samples</FormLabel>
                                            <FormControl>
                                                {/* <Slider
                                                    min={1}
                                                    max={10}
                                                    step={1}
                                                    {...field}
                                                /> */}
                                                <SliderWithValue
                                                    value={field.value}
                                                    min={1}
                                                    max={10}
                                                    step={1}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    )}
                </CardContent>
            </AccordionContent>
        </Card>
    );
};

export default ClusteringOptions;
