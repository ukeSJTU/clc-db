"use client";

// This component is used to display a badge for a Category.
// The badge will have a background color that is dynamically generated based on the Category name.
// The badge will display the full name of the Category by default, but can be set to display an abbreviation instead.
// When clicked, the badge will navigate to the download page for the Category.

import React from "react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface ClassTypeBadgeProps {
    category: { name: string }; // Expecting a single category object
    abbreviate?: boolean; // Optional prop to control if the name should be abbreviated
    className?: string; // Optional prop to accept additional CSS classes
}

const dynamicColor = (typeName: string) => {
    const baseColors = [
        "bg-red-100 text-red-800",
        "bg-green-100 text-green-800",
        "bg-blue-100 text-blue-800",
        "bg-yellow-100 text-yellow-800",
    ];
    let hash = 0;
    for (let i = 0; i < typeName.length; i++) {
        hash = typeName.charCodeAt(i) + ((hash << 5) - hash);
    }
    return baseColors[Math.abs(hash) % baseColors.length]; // Use the absolute value of hash to ensure a positive index
};

const abbreviateName = (name: string) => {
    return name
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .toUpperCase(); // Create an abbreviation by taking the first letter of each word
};

const CategoryBadge: React.FC<ClassTypeBadgeProps> = ({
    category,
    abbreviate = true,
    className = "",
}) => {
    const router = useRouter();
    const colorClass = dynamicColor(category.name);
    const displayText = abbreviate
        ? abbreviateName(category.name)
        : category.name;

    const handleBadgeClick = (name: string) => {
        // when clicked, navigate to the download page for this Category
        router.push(`/download/categories/${name}`);
    };

    return (
        <Badge
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colorClass} text-nowrap ${className}`}
            title={category.name} // Add a title attribute to show the full name on hover
            onClick={() => handleBadgeClick(category.name)}
        >
            {displayText}
        </Badge>
    );
};

export default CategoryBadge;
