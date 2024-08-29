"use client";

import React, { useEffect, useRef } from "react";
import {
    Chart,
    ChartData,
    ChartOptions,
    registerables,
    TooltipItem,
} from "chart.js";

interface ClusteringResultsChartProps {
    results: {
        coordinates: string[][][];
        class_numbers: number[];
        ids: string[];
    };
}

interface CustomTooltipItem extends TooltipItem<"scatter"> {
    raw: {
        x: number;
        y: number;
        cas_id: string;
    };
}

const ClusteringResultsChart: React.FC<ClusteringResultsChartProps> = ({
    results,
}) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext("2d");
            if (ctx) {
                Chart.register(...registerables);

                const data: ChartData<"scatter"> = {
                    datasets: results.class_numbers.map((classNumber) => ({
                        label: `Class ${classNumber}`,
                        data: results.coordinates[classNumber].map(
                            (_, index) => ({
                                x: parseFloat(
                                    results.coordinates[classNumber][index][0]
                                ),
                                y: parseFloat(
                                    results.coordinates[classNumber][index][1]
                                ),
                                cas_id: results.coordinates[classNumber][
                                    index
                                ][2], // Add cas_id here
                            })
                        ),
                        backgroundColor: `rgba(${Math.floor(
                            Math.random() * 256
                        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
                            Math.random() * 256
                        )}, 0.7)`,
                        pointRadius: 5,
                        pointHoverRadius: 8,
                    })),
                };

                const options: ChartOptions<"scatter"> = {
                    responsive: true,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: (context: CustomTooltipItem) =>
                                    context.raw.cas_id, // Display cas_id in the tooltip
                            },
                        },
                    },
                    scales: {
                        x: {
                            type: "linear",
                            grid: {
                                display: true,
                            },
                        },
                        y: {
                            type: "linear",
                            grid: {
                                display: true,
                            },
                        },
                    },
                };

                // Destroy the previous chart instance if it exists
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
                }

                // Create a new chart instance
                chartInstanceRef.current = new Chart(ctx, {
                    type: "scatter",
                    data,
                    options,
                });
            }
        }
    }, [results]);

    return (
        <div className="w-full h-96">
            <canvas ref={chartRef} className="w-full h-full" />
        </div>
    );
};

export default ClusteringResultsChart;
