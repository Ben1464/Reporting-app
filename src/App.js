import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';
import Sales from './components/Sales';
import MarketingActivities from './components/MarketingActivities';
import CompetitiveAnalysis from './components/CompetitiveAnalysis';
import ChallengesFaced from './components/ChallengesFaced';
import TopSellingProducts from './components/TopSellingProduct';
import UpcomingActions from './components/UpcomingActions';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [salesData, setSalesData] = useState([]);
  const [marketingActivities, setMarketingActivities] = useState([]);
  const [competitiveAnalysis, setCompetitiveAnalysis] = useState([]);
  const [challengesFaced, setChallengesFaced] = useState([]);
  const [topSellingProducts, setTopSellingProducts] = useState([]);
  const [upcomingActions, setUpcomingActions] = useState([]);

  // Sync data across components
  useEffect(() => {
    // Any additional sync logic can be added here if necessary
  }, [salesData, marketingActivities, competitiveAnalysis, challengesFaced, topSellingProducts, upcomingActions]);

  return (
    <div className="app-container">
      <h1 className="app-title">Daily Report App</h1>

      {/* Components for Data Entry */}
      <div className="components-container">
        <div className="component">
          <Sales setSalesData={setSalesData} />
        </div>
        <div className="component">
          <MarketingActivities setMarketingActivities={setMarketingActivities} />
        </div>
        <div className="component">
          <CompetitiveAnalysis setCompetitiveAnalysis={setCompetitiveAnalysis} />
        </div>
        <div className="component">
          <ChallengesFaced setChallengesFaced={setChallengesFaced} />
        </div>
        <div className="component">
          <TopSellingProducts setTopSellingData={setTopSellingProducts} />
        </div>
        <div className="component">
          <UpcomingActions setUpcomingActionsData={setUpcomingActions} />
        </div>
      </div>

      {/* PDF Download Button */}
      <PDFDownloadLink
        document={
          <MyDocument
            salesData={salesData}
            marketingActivities={marketingActivities}
            competitiveAnalysis={competitiveAnalysis}
            challengesFaced={challengesFaced}
            topSellingProducts={topSellingProducts}
            upcomingActions={upcomingActions}
          />
        }
        fileName="daily_report.pdf"
      >
        {({ loading }) => (
          <button className="pdf-download-button">
            {loading ? 'Preparing document...' : 'Download Daily Report as PDF'}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
