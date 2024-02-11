// FundPerformanceChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import './App.css';

const FundPerformanceChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            const myChart = new Chart(chartRef.current, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'Fund Performance',
                            data: [1000, 1100, 1200, 1250, 1300, 1350],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            return () => {
                myChart.destroy();
            };
        }
    }, []);

    return (
        <div className='chart-container'>
            <h2>Fund Performance Chart</h2>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default FundPerformanceChart;
