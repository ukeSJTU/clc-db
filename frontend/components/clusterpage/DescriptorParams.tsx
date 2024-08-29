import React from "react";
import { Input } from "@/components/ui/input";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
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
import SliderWithValue from "@/components/SliderWithValue";

interface E3FPParametersProps {
    control: Control<any>;
}

interface RDKitParametersProps {
    control: Control<any>;
}

interface DescriptorParametersProps {
    control: Control<any>;
    descriptor: string;
}

const E3FPParameters: React.FC<E3FPParametersProps> = ({ control }) => {
    return (
        <Card>
            <AccordionTrigger>
                <CardHeader>
                    <CardTitle>Step 3. E3FP Parameters</CardTitle>
                </CardHeader>
            </AccordionTrigger>
            <AccordionContent>
                <CardContent>
                    <div className="flex flex-col space-y-4">
                        <FormField
                            control={control}
                            name="bits"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>nBits of E3FP</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            step={24}
                                            value={field.value}
                                            onChange={(
                                                e: React.ChangeEvent<HTMLInputElement>
                                            ) =>
                                                field.onChange(
                                                    Number(e.target.value)
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
                            name="radius"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Radius multiplier</FormLabel>
                                    <FormControl>
                                        <SliderWithValue
                                            value={field.value}
                                            min={0}
                                            max={10}
                                            step={0.1}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="rdkitInv"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>Feature</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={(value) =>
                                                field.onChange(value === "Yes")
                                            }
                                            defaultValue={
                                                field.value ? "Yes" : "No"
                                            }
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Yes
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="No" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    No
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </CardContent>
            </AccordionContent>
        </Card>
    );
};

const RDKitParameters: React.FC<RDKitParametersProps> = ({ control }) => {
    return (
        <Card>
            <AccordionTrigger>
                <CardHeader>
                    <CardTitle>Step 3. Morgan Parameters</CardTitle>
                </CardHeader>
            </AccordionTrigger>
            <AccordionContent>
                <CardContent>
                    <div className="flex flex-col space-y-4">
                        <FormField
                            control={control}
                            name="bits"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>nBits of Morgan</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            step={24}
                                            value={field.value}
                                            onChange={(e) =>
                                                field.onChange(
                                                    Number(e.target.value)
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
                            name="rdkitRadius"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Radius</FormLabel>
                                    <FormControl>
                                        <SliderWithValue
                                            value={field.value}
                                            min={0}
                                            max={10}
                                            step={1}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="rdkitUseFeatures"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>useFeatures</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={(value) =>
                                                field.onChange(value === "Yes")
                                            }
                                            defaultValue={
                                                field.value ? "Yes" : "No"
                                            }
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Yes
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="No" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    No
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="rdkitUseBondTypes"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>useBondTypes</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={(value) =>
                                                field.onChange(value === "Yes")
                                            }
                                            defaultValue={
                                                field.value ? "Yes" : "No"
                                            }
                                            className="flex flex-col space-y-1"
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Yes
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="No" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    No
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={control}
                            name="rdkitUseChirality"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>useChirality</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={(value) =>
                                                field.onChange(value === "Yes")
                                            }
                                            defaultValue={
                                                field.value ? "Yes" : "No"
                                            }
                                        >
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    Yes
                                                </FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-3 space-y-0">
                                                <FormControl>
                                                    <RadioGroupItem value="No" />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    No
                                                </FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </CardContent>
            </AccordionContent>
        </Card>
    );
};

const DescriptorParameters: React.FC<DescriptorParametersProps> = ({
    control,
    descriptor,
}) => {
    if (descriptor === "E3FP") {
        return <E3FPParameters control={control} />;
    } else if (descriptor === "RDKit") {
        return <RDKitParameters control={control} />;
    }

    return (
        <div>
            <p>Parameter setting for descriptor {descriptor} does not exist</p>
        </div>
    );
};

export default DescriptorParameters;
