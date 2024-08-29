"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";
import SearchBar from "@/components/searchpage/SearchBar";
import { MoleculeProps } from "@/types/molecule";
import OverviewContainer from "@/components/OverviewContainer";
import SearchOptionsGroup from "@/components/searchpage/SearchOptionsGroup";
import { SearchHeading, SearchTip } from "@/components/searchpage/SearchText";
import SearchExamples from "@/components/searchpage/SearchExamples";
import api from "@/utils/api";
import {
    DrawStructureComponent,
    MultiCasIDSearchComponent,
} from "@/components/searchpage/SpecialSearch";

type SearchOption = {
    displayName: string;
    searchName: string;
};

interface SearchInfoComponentProps {
    query: string;
    searchOpt: SearchOption["searchName"];
    resultsCount: number;
}

const SearchInfoComponent: React.FC<SearchInfoComponentProps> = ({
    query,
    searchOpt,
    resultsCount,
}) => {
    const escapedQuery = query.replace(/"/g, "&#34;");

    return resultsCount > 0 ? (
        <div className="text-xl font-semibold text-nowrap">
            <p className="text-gray-600 dark:text-gray-400">
                Searching for {searchOpt} = {escapedQuery}
            </p>
        </div>
    ) : null;
};

const SearchPage = () => {
    const options = [
        { displayName: "CAS ID", searchName: "cas_id" },
        { displayName: "Name", searchName: "name" },
        { displayName: "SMILES", searchName: "smiles" },
    ];

    const [searchOpt, setSearchOpt] = useState(options[0].searchName);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<MoleculeProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchInitiated, setSearchInitiated] = useState(false);

    // Pagination settings
    const [paginationState, setPaginationState] = useState({
        page: 1,
        pageSize: 12,
        totalPages: 0,
    });

    const handleSearch = useDebouncedCallback(
        async (
            searchQuery = query,
            searchOption = searchOpt,
            page = paginationState.page,
            pageSize = paginationState.pageSize
        ) => {
            if (searchQuery.trim() === "") {
                setResults([]);
                setPaginationState((prevState) => ({
                    ...prevState,
                    totalPages: 0,
                }));
                return;
            }

            setIsLoading(true);
            console.log(
                "Searching:",
                `/search/molecules?${searchOption}=${searchQuery}&page=${page}&page_size=${pageSize}`
            );

            try {
                const response = await api.get(
                    `/search/molecules?${searchOption}=${searchQuery}&page=${page}&page_size=${pageSize}`
                );

                const { results: fetchedResults = [], count = 0 } =
                    response.data || {};

                console.log("fetchedResults", fetchedResults);
                setResults(fetchedResults);
                setPaginationState((prevState) => ({
                    ...prevState,
                    totalPages: Math.ceil(count / pageSize),
                }));
                setSearchInitiated(true);
            } catch (error) {
                console.error("Failed to fetch molecules", error);
                setResults([]);
                setPaginationState((prevState) => ({
                    ...prevState,
                    totalPages: 0,
                }));
            } finally {
                setIsLoading(false);
            }
        },
        300
        // [query, searchOpt, paginationState.page, paginationState.pageSize]
    );

    const handleSpecialSearchInput = (
        query_str: string,
        searchOpt: string,
        triggerSearch: boolean = true
    ) => {
        setQuery(query_str);
        setSearchOpt(searchOpt);
        console.log("query_str", query_str);
        console.log("searchOpt", searchOpt);
        console.log("triggerSearch", triggerSearch);
        if (triggerSearch === true) {
            console.log("triggering search");
            handleSearch(query_str, searchOpt, 1, paginationState.pageSize);
        }
    };

    const handleSmilesInput = (smiles: string) => {
        setQuery(smiles);
        setSearchOpt("smiles");
    };

    const handlePaginationChange = (
        newPaginationState: typeof paginationState
    ) => {
        setPaginationState(newPaginationState);
    };

    const handleExampleClick = (
        exampleQuery: string,
        exampleSearchOpt: string
    ) => {
        setQuery(exampleQuery);
        setSearchOpt(exampleSearchOpt);
        handleSearch(
            exampleQuery,
            exampleSearchOpt,
            1,
            paginationState.pageSize
        );
    };

    useEffect(() => {
        if (searchInitiated) {
            handleSearch();
        }
    }, [searchInitiated, handleSearch]);

    return (
        <div className="flex flex-col items-center py-12 space-y-4">
            {/* Search Components */}
            <div className="flex flex-col gap-2 w-full max-w-md sm:max-w-lg md:max-w-2xl">
                <SearchHeading />
                <div className="flex flex-col gap-2 w-full max-w-md sm:max-w-lg md:max-w-2xl">
                    <SearchOptionsGroup
                        options={options}
                        setSearchOpt={setSearchOpt}
                        searchOpt={searchOpt}
                    />
                    <SearchBar
                        query={query}
                        setQuery={setQuery}
                        handleSearch={() =>
                            handleSearch(
                                query,
                                searchOpt,
                                1,
                                paginationState.pageSize
                            )
                        }
                        onSmilesInput={handleSmilesInput}
                    />
                    <SearchExamples onExampleClick={handleSpecialSearchInput} />
                </div>
                <div className="flex flex-row items-center justify-center px-4">
                    <div className="flex justify-end mr-2 w-1/2">
                        <DrawStructureComponent
                            onSubmit={handleSpecialSearchInput}
                            onClose={() => setShowDropdown(false)}
                        />
                    </div>
                    <div className="flex justify-start ml-2 w-1/2">
                        <MultiCasIDSearchComponent
                            onSubmit={handleSpecialSearchInput}
                            onClose={() => setShowDropdown(false)}
                        />
                    </div>
                </div>
            </div>
            {/* Result Components */}
            <OverviewContainer
                molecules={results}
                paginationProps={{
                    page: paginationState.page,
                    setPage: (page) =>
                        handlePaginationChange({ ...paginationState, page }),
                    pageSize: paginationState.pageSize,
                    setPageSize: (pageSize) =>
                        handlePaginationChange({
                            ...paginationState,
                            pageSize,
                        }),
                    totalPages: paginationState.totalPages,
                }}
                // topLeftComponent={
                //     searchInitiated && (
                //         <SearchInfoComponent
                //             query={query}
                //             searchOpt={searchOpt}
                //             resultsCount={results.length}
                //         />
                //     )
                // }
            />
        </div>
    );
};

export default SearchPage;
