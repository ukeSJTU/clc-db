"use client";

import React, { useRef, useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Molecule3DViewerProps = {
    casId: string; // CAS Registry Number as a prop
};

const Molecule3DViewer: React.FC<Molecule3DViewerProps> = ({ casId }) => {
    const viewerRef = useRef<HTMLDivElement | null>(null);
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!viewerRef.current || !data) return;

        import("3dmol/build/3Dmol.js")
            .then(($3Dmol) => {
                try {
                    const viewer = new $3Dmol.createViewer(viewerRef.current, {
                        backgroundColor: "white",
                    });
                    viewer.addModel(data, "sdf");
                    viewer.setStyle({}, { stick: {} });
                    viewer.zoomTo();
                    viewer.render();
                    setIsLoading(false);
                } catch (e) {
                    setError("Failed to initialize the molecular viewer.");
                    setIsLoading(false);
                }
            })
            .catch(() => {
                setError("3Dmol.js library could not be loaded.");
                setIsLoading(false);
            });
    }, [data]);

    useEffect(() => {
        setIsLoading(true);
        // Fetch the .sdf file based on the CAS ID
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_STATIC}/all_sdfs/${casId}.sdf`);

                // Check if the response returned a 404 error or any other error
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error(
                            `.sdf file for CAS ID ${casId} was not found.`
                        );
                    } else {
                        throw new Error(
                            `Network response was not ok (Status: ${response.status}).`
                        );
                    }
                }

                const textData = await response.text();
                setData(textData);
                setError(null); // Clear any previous errors on successful data fetch
            } catch (e) {
                setData(null);
                setError(
                    e instanceof Error ? e.message : "Failed to load .sdf data."
                );
            } finally {
                setIsLoading(false); // Always stop loading regardless of success or failure
            }
        };

        fetchData();
    }, [casId]);

    return (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
            {error ? (
                <Skeleton className="h-full" />
            ) : (
                <div
                    ref={viewerRef}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {isLoading && <Skeleton className="h-full" />}
                </div>
            )}
        </div>
    );
};

export default Molecule3DViewer;
