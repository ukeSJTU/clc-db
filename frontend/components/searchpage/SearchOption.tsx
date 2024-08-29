// The search option component is a simple checkbox with a label.

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface SearchOptionProps {
    displayName: string;
    searchName: string;
    isChecked: boolean;
    onChange: (name: string) => void;
    icon?: string;
}

const SearchOption: React.FC<SearchOptionProps> = ({
    displayName,
    searchName,
    isChecked,
    onChange,
}) => {
    const handleChange = (checked: boolean) => {
        onChange(searchName);
    };

    return (
        <div className="flex items-center gap-2">
            <Checkbox
                id={searchName}
                checked={isChecked}
                onCheckedChange={handleChange}
            />
            <Label htmlFor={searchName}>{displayName}</Label>
        </div>
    );
};

export default SearchOption;
