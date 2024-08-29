"use client";

import { Category } from "@/types/molecule";
import React, { useEffect, useState } from "react";
import api from "@/utils/api";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import CategoryBadge from "@/components/CategoryBadge";

interface CategorySelectorProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
    selectedCategory,
    onCategoryChange,
}) => {
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
        <div className="space-x-4 space-y-2 flex flex-row items-center justify-center">
            <Label
                htmlFor="category"
                className="text-xl font-semibold text-nowrap"
            >
                Select a category:
            </Label>
            <Select
                value={selectedCategory}
                onValueChange={(value) => onCategoryChange(value)}
            >
                <SelectTrigger>
                    <SelectValue
                        placeholder={
                            <CategoryBadge
                                category={{ name: "All categories" }}
                                abbreviate={false}
                            />
                        }
                    />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">
                        <CategoryBadge
                            category={{ name: "All categories" }}
                            abbreviate={false}
                        />
                    </SelectItem>
                    {categories.map((category) => (
                        <SelectItem key={category.id} value={category.name}>
                            <CategoryBadge
                                category={category}
                                abbreviate={false}
                            />
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

export default CategorySelector;
