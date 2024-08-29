"use client";

// This is the main navigation bar component that displays the main menu items.
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const Navbar = () => {
    return (
        <div className="flex justify-between flex-row w-full top-0 p-4 z-10 sticky bg-white">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Overview</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/services/clc-db"
                                        >
                                            <Icons.logo className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                CLC-DB-Overview
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Overview of all the molecules in
                                                the database on CLC-DB. Data
                                                rich, interactive and
                                                user-friendly.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/services/clc-db/overview/card/1" title="Card">
                                    View all the molecules in the database in a
                                    card format.
                                </ListItem>
                                <ListItem
                                    href="/services/clc-db/overview/table/1"
                                    title="Table"
                                >
                                    View the table of all the molecules in the
                                    database.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link
                            href="/download/categories"
                            legacyBehavior
                            passHref
                        >
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Download
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger>Download</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Icons.logo className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                CLC-DB-Download
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Download the molecule(s) from
                                                the database on CLC-DB.
                                                Choose to download a single
                                                molecule or multiple molecules.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem
                                    href="/download/molecules"
                                    title="CAS ID"
                                >
                                    Download a single molecule by its unique CAS
                                    ID.
                                </ListItem>
                                <ListItem
                                    href="/download/categories"
                                    title="Category"
                                >
                                    Download a group of molecules of the same
                                    Category.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}

                    <NavigationMenuItem>
                        <Link href="/search" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Search
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            External JS
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/"
                                        >
                                            <Icons.logo className="h-6 w-6" />
                                            <div className="mb-2 mt-4 text-lg font-medium">
                                                CLC-DB-Ext
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                CLC-DB also supports multiple
                                                external JS library such as
                                                3Dmol and Kekulejs. Play with
                                                them here.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem
                                    href="/externalJS/3dmol"
                                    title="3Dmol"
                                >
                                    3Dmol: an open-source Java(Script) viewer
                                    for chemical structures in 3D.
                                </ListItem>
                                <ListItem
                                    href="/externalJS/kekule"
                                    title="Kekule"
                                >
                                    A pure JavaScript chemical graphics and
                                    cheminformatics library.
                                </ListItem>
                                <ListItem
                                    href="/externalJS/charts"
                                    title="Charts"
                                >
                                    Charts.js: an open-source toolkit to display
                                    charts on web page.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}

                    <NavigationMenuItem>
                        <Link href="/cluster" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Cluster
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/statistics" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Stats
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/help" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Help
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}
                            >
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="text-lg font-bold flex items-center">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/services/clc-db/favicon.webp"
                        alt="Favicon"
                        width={32}
                        height={32}
                        className="mr-2"
                    />
                    CLC-DB
                </Link>
            </div>
        </div>
    );
};

export default Navbar;

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
