"use client";

import React, { useState } from "react";
import { MoleculeProps } from "@/types/molecule";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const Molecule2DImage = ({ molecule }: { molecule: MoleculeProps }) => {
    const [hasError, setHasError] = useState(false);

    const handleImageError = () => {
        setHasError(true);
    };

    const renderImage = (src: string) => (
        <div className="relative w-full h-full bg-white">
            <Image
                alt="2D Image"
                src={src}
                fill
                sizes="100vw"
                className="bg-white object-contain"
                onError={handleImageError}
            />
        </div>
    );

    const renderNoImagePlaceholder = () => (
        <div className="relative w-full h-full bg-gray-100 flex justify-center items-center text-gray-400 rounded-3xl">
            <p className="text-xl text-center text-gray-700">
                No 2D image available
            </p>
        </div>
    );

    const renderSkeleton = () => (
        <div className="relative w-full h-64 bg-gray-100 flex justify-center items-center text-gray-400 rounded-3xl">
            <Skeleton className="relative w-full h-64 flex items-center align-middle" />
        </div>
    );

    return (
        <div className="w-full h-64 relative">
            {!hasError
                ? renderImage(
                      `${process.env.NEXT_PUBLIC_STATIC}/2Dimages/${molecule.cas_id}.png`
                  )
                : renderSkeleton()}
        </div>
    );
};

export default Molecule2DImage;
