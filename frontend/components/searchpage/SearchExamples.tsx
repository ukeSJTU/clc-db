import React from "react";
import { Button } from "@/components/ui/button";

interface SearchExamplesProps {
    onExampleClick: (exampleQuery: string, exampleSearchOpt: string) => void;
}

const SearchExamples: React.FC<SearchExamplesProps> = ({ onExampleClick }) => {
    const examples = [
        {
            queries: [
                { query: "1246888-90-3", searchOpt: "cas_id" },
                { query: "3-(tert-Butyl)", searchOpt: "name" },
            ],
        },
    ];

    return (
        <div className="flex flex-row items-center space-x-4">
            <span className="text-sm font-semibold mr-2">Examples:</span>
            <div className="flex flex-row space-x-2">
                {examples.map((example, index) => (
                    <React.Fragment key={index}>
                        {example.queries.map((query, queryIndex) => (
                            <Button
                                key={queryIndex}
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                    onExampleClick(query.query, query.searchOpt)
                                }
                            >
                                {query.query}
                            </Button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SearchExamples;
