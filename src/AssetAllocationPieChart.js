// AssetAllocationPieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import './App.css';

const AssetAllocationPieChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');

            const data = {
                labels: ['Stocks', 'Bonds', 'Cash', 'Real Estate'],
                datasets: [{
                    label: 'Asset Allocation',
                    data: [40, 30, 20, 10], // Sample asset allocation percentages
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)'
                    ],
                    hoverOffset: 4
                }]
            };

            new Chart(ctx, {
                type: 'pie',
                data: data,
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'Asset Allocation',
                            align: 'start' // Align the title to the left
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    const label = context.label || '';
                                    const value = context.parsed || 0;
                                    const dataset = context.dataset.data;
                                    const total = dataset.reduce((acc, curr) => acc + curr, 0);
                                    const percentage = Math.round((value / total) * 100);
                                    return `${label}: ${percentage}%`;
                                }
                            }
                        }
                    }
                }
            });
        }
    }, []);

    return (
        <div className="pie-chart-container">
            <h2>Asset Allocation</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default AssetAllocationPieChart;
