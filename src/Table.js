// Table.js
import React from 'react';
// import './Table.css'; // Import CSS file for styling

const Table = () => {
    // Create a 2D array to represent the table data
    const tableData = [
        ['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'],
        ['Row 1', 'Row 1', 'Row 1', 'Row 1', 'Row 1'],
        ['Row 2', 'Row 2', 'Row 2', 'Row 2', 'Row 2'],
        ['Row 3', 'Row 3', 'Row 3', 'Row 3', 'Row 3'],
        ['Row 4', 'Row 4', 'Row 4', 'Row 4', 'Row 4'],
        ['Row 5', 'Row 5', 'Row 5', 'Row 5', 'Row 5']
    ];

    return (
        <div className="table-container">
          
            <table>
                <thead>
                    <tr>
                        <th>Heading</th>
                        {tableData[0].map((heading, index) => (
                            <th key={index}>{heading}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td>Heading</td>
                            {row.map((cellData, cellIndex) => (
                                <td key={cellIndex}>{cellData}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
