// The component that displays the search options group
// It is used in search page to display the search options

"use client";

import React, { useState, useEffect } from "react";

import SearchOption from "@/components/searchpage/SearchOption";

const SearchOptionsGroup = ({
    options,
    setSearchOpt,
    searchOpt,
}: {
    options: { displayName: string; searchName: string }[];
    setSearchOpt: (opt: string) => void;
    searchOpt: string;
}) => {
    const [checkedOption, setCheckedOption] = useState<string | null>(null);

    useEffect(() => {
        const selectedOption = options.find(
            (option) => option.searchName === searchOpt
        );
        if (selectedOption) {
            setCheckedOption(selectedOption.displayName);
        } else {
            setCheckedOption(null);
        }
    }, [searchOpt, options]);

    const handleOptionChange = (displayName: string, searchName: string) => {
        console.log(
            `Option changed. Display name: ${displayName}; Search name: ${searchName}`
        );
        setCheckedOption(displayName);
        setSearchOpt(searchName);
    };

    return (
        <div className="flex items-center gap-4">
            {options.map((option, index) => (
                <SearchOption
                    key={index}
                    displayName={option.displayName}
                    searchName={option.searchName}
                    isChecked={option.displayName === checkedOption}
                    onChange={() =>
                        handleOptionChange(
                            option.displayName,
                            option.searchName
                        )
                    }
                />
            ))}
        </div>
    );
};

export default SearchOptionsGroup;
