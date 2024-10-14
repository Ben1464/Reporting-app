import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sales from './components/Sales';
import MarketingActivities from './components/MarketingActivities';
import Competition from './components/Competition'; // Ensure this is the correct import
import ChallengesFaced from './components/ChallengesFaced';
import TopSellingProducts from './components/TopSellingProduct';
import UpcomingActions from './components/UpcomingActions';
import { DownloadPDF } from './MyDocument'; // Import the PDF download component
import './App.css'; // Your CSS file for styles

const App = () => {
  const [salesData, setSalesData] = useState([]); // Add state to manage sales data

  // Function to handle setting sales data from the Sales component
  const updateSalesData = (data) => {
    setSalesData(data);
  };

  return (
    <Router>
      <div className="App">
        <h1>Daily Sales Report</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Sales</Link>
            </li>
            <li>
              <Link to="/marketing-activities">Marketing Activities</Link>
            </li>
            <li>
              <Link to="/competitive-analysis">Competitive Analysis</Link>
            </li>
            <li>
              <Link to="/challenges-faced">Challenges Faced</Link>
            </li>
            <li>
              <Link to="/top-selling-products">Top Selling Products</Link>
            </li>
            <li>
              <Link to="/upcoming-actions">Upcoming Actions</Link>
            </li>
          </ul>
        </nav>

        <DownloadPDF salesData={salesData} /> {/* Include PDF download link here */}

        <Routes>
          <Route path="/" element={<Sales updateSalesData={updateSalesData} />} />
          <Route path="/marketing-activities" element={<MarketingActivities />} />
          <Route path="/competitive-analysis" element={<Competition />} />
          <Route path="/challenges-faced" element={<ChallengesFaced />} />
          <Route path="/top-selling-products" element={<TopSellingProducts />} />
          <Route path="/upcoming-actions" element={<UpcomingActions />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
