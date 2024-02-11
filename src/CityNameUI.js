// CityNameUI.js
import React, { useState } from 'react';
import FundPerformanceChart from './FundPerformance';
import AssetAllocationPieChart from './AssetAllocationPieChart';
import './App.css';

const CityNameUI = () => {

    const [id, setid] = useState();
    return (
        <div className="masonry-grid">
            <div className="item item1" onClick={() => setid(1)}>Item 1</div>
            <div className="item item2" onClick={() => setid(2)}>Item 2</div>
            <div className="item item3" onClick={() => setid(3)}>Item 3</div>
            <div className="item item4" onClick={() => setid(4)}>Item 4</div>
            <div className="item item5" onClick={() => setid(5)}>Item 5</div>
            <div className="item item6" onClick={() => setid(6)}>Item 6</div>
            <div className="item item7" onClick={() => setid(7)}>Item 7</div>
            <div className="item item8" onClick={() => setid(8)}>Item 8</div>
            <div className="item item9" onClick={() => setid(9)}>Item 9</div>
            <div className="item item10" onClick={() => setid(10)}>Item 10</div>
            <div className="item item11" onClick={() => setid(11)}>Item 11</div>
            <div className="item item12" onClick={() => setid(12)}>Item 12</div>
            <div className="item item13" onClick={() => setid(13)}>Item 13</div>
            {/* <FundPerformanceChart id={id} />
            <AssetAllocationPieChart id={id} /> */}
        </div>
    );
};

export default CityNameUI;
