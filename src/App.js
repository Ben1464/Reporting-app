import React, { useState } from 'react';
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

  return (
    <div className="container"> {/* Main container for the app */}
      <h1>Daily Report App</h1>

      {/* Components */}
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
        <TopSellingProducts setTopSellingProducts={setTopSellingProducts} />
      </div>
      <div className="component">
        <UpcomingActions setUpcomingActionsData={setUpcomingActions} />
      </div>

      {/* Download PDF Button */}
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
          <a className="pdf-download-link"> {/* Updated to use a link style */}
            {loading ? 'Preparing document...' : 'Download Daily Report as PDF'}
          </a>
        )}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
