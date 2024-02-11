import React, { useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';

const BarChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        Chart.register(CategoryScale, LinearScale, BarController, BarElement);

        if (chartRef.current && chartRef.current.chart) {
            // Destroy the existing chart instance
            chartRef.current.chart.destroy();
        }
        const ctx = document.getElementById('myChart').getContext('2d');
        const newChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                    {
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'category',
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        chartRef.current.chart = newChart;
    }, []);
    return (
        <div>
            <h2>Bar Chart Example</h2>
            <canvas id="myChart" ref={chartRef} width="400" height="400"></canvas>
        </div>
    );
};

export default BarChart;
