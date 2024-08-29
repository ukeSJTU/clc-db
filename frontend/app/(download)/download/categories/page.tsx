// This is the page to display all available class types for download

"use client";

import { Category, MoleculeProps } from "@/types/molecule";
import React, { useEffect, useState } from "react";
import api from "@/utils/api";
import CategoryBadge from "@/components/CategoryBadge";

const CategoriesPage = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        // Fetch categories from your API
        const fetchCategories = async () => {
            const response = api.get("/categories/");
            const data = (await response).data;
            setCategories(data);
        };

        fetchCategories();
    }, []);

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">
                Available Class Types
            </h1>
            <p className="text-lg text-gray-600 mb-4 text-center">
                Click on a badge to view all the molecules under that category.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl pb-4">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="transition duration-300 ease-in-out transform hover:-translate-y-1"
                    >
                        <CategoryBadge
                            key={category.id}
                            category={{ name: category.name }}
                            abbreviate={false}
                            className="text-base font-medium"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
