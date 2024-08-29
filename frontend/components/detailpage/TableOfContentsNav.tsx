// This component is used to display the table of contents for the detail page.

import React, { useEffect, useState } from "react";

interface Section {
    id: string;
    label: string;
}

interface TableOfContentsNavProps {
    sections: Section[];
}

const TableOfContentsNav: React.FC<TableOfContentsNavProps> = ({
    sections,
}) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset + window.innerHeight / 2;
            const sectionElements = Array.from(
                document.querySelectorAll("section")
            );

            const activeSection = sectionElements.findLast((section) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                return (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionBottom
                );
            });

            setActiveSection(activeSection?.id || null);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sticky top-0 h-screen overflow-y-auto rounded-lg border border-gray-200 bg-white p-2 lg:p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <nav className="space-y-4">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`block text-sm font-medium ${
                            activeSection === section.id
                                ? "text-indigo-600 dark:text-indigo-400"
                                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        }`}
                    >
                        {section.label}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default TableOfContentsNav;
