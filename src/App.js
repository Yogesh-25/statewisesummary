// src/App.js
import React from 'react';
import './App.css';
import CityNameUI from './CityNameUI';
import AssetAllocationPieChart from './AssetAllocationPieChart';
import FundPerformanceChart from './FundPerformance';
import Table from './Table';

function App() {
  return (
    <div className="App">
     
      <AssetAllocationPieChart/>
      <FundPerformanceChart/>
      <Table/><CityNameUI/>

    </div>
  );
}

export default App;
