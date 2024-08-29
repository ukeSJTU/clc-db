// This file provides a series of interactive charts that display the statistical info of the database
// The charts are created using the Chart.js library
"use client";

import { Bar, Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
import { useEffect, useState } from "react";
import api from "@/utils/api";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const CategoryDistChart = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/stats/category");
                const data = response.data;

                console.log(data);

                const labels = data.map((item) => item.category__name);
                const counts = data.map((item) => item.count);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: "Number of Molecules",
                            data: counts,
                            backgroundColor: "rgba(75,192,192,0.6)",
                        },
                    ],
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full">
            <Bar
                data={chartData}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: {
                            display: false,
                            text: "Category Distribution",
                        },
                    },
                }}
            />
        </div>
    );
};

const ChiralityDistChart = () => {
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/stats/chirality");
                const data = response.data;

                console.log(data);

                const labels = data.map((item) => item.chirality__name);
                const counts = data.map((item) => item.count);

                setChartData({
                    labels,
                    datasets: [
                        {
                            data: counts,
                            backgroundColor: [
                                "#FF6384",
                                "#36A2EB",
                                "#FFCE56",
                                "#8BC34A",
                                "#E91E63",
                            ],
                        },
                    ],
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full">
            <Pie
                data={chartData}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: {
                            display: false,
                            text: "Chirality Distribution",
                        },
                    },
                }}
            />
        </div>
    );
};

const WeightDistributionChart = () => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/stats/weights");
                const data = response.data;
                setChartData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: "Molecule Weight",
                            data: data.values,
                            backgroundColor: "rgba(75, 192, 192, 0.2)",
                        },
                    ],
                });
            } catch (error) {
                console.log("Error fetching weight distribution data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full">
            <Bar
                data={chartData}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: {
                            display: false,
                            text: "Molecule Weight Distribution",
                        },
                    },
                }}
            />
        </div>
    );
};

export { ChiralityDistChart, CategoryDistChart, WeightDistributionChart };
