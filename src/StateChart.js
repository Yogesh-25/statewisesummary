// StateChart.js
import React from 'react';
import stateData from './stateData.json'; // Import the JSON file

const StateChart = () => {
    return (
        <div>
            <h2>State Chart</h2>
            <ul>
                {stateData.map((data, index) => (
                    <li key={index}>{data.state}: {data.temperature}°F</li>
                ))}
            </ul>
        </div>
    );
};

export default StateChart;
