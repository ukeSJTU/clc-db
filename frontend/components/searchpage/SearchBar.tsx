import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon, SquarePlus } from "lucide-react";

interface SearchBarProps {
    query: string;
    setQuery: (query: string) => void;
    handleSearch: () => void;
    onSmilesInput: (smiles: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    query,
    setQuery,
    handleSearch,
    onSmilesInput,
}) => {
    return (
        <div className="relative flex flex-row items-stretch space-x-2">
            <Input
                value={query} // Binds input value to query state
                onChange={(e) => setQuery(e.target.value)} // Updates state on input change
                className="flex-1 pr-12 pl-8"
                placeholder="Search molecules..."
                type="search"
            />

            <Button
                className="bg-gray-900"
                variant="ghost"
                onClick={handleSearch}
            >
                <SearchIcon className="w-4 h-4 text-gray-400 dark:text-gray-500" />
            </Button>
        </div>
    );
};
export default SearchBar;
