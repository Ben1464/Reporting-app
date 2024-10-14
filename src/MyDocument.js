import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import Sales from './components/Sales'; // Adjust the import paths as needed
import MarketingActivities from './components/MarketingActivities';
import Competition from './components/Competition'; // Importing CompetitiveAnalysis properly
import ChallengesFaced from './components/ChallengesFaced';
import TopSellingProducts from './components/TopSellingProduct';
import UpcomingActions from './components/UpcomingActions';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'center',
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 10,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCell: {
    margin: 5,
    padding: 5,
    border: '1px solid #000',
    flexGrow: 1,
  },
});

const MyDocument = ({ salesData }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Sales</Text>
          {/* Render Sales Data */}
          <Sales data={salesData} /> {/* Pass salesData as a prop */}
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Marketing Activities</Text>
          <MarketingActivities />
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Competitive Analysis</Text>
          <Competition /> {/* Ensure this is the correct component name */}
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Challenges Faced</Text>
          <ChallengesFaced />
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Top Selling Products</Text>
          <TopSellingProducts />
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>Upcoming Actions</Text>
          <UpcomingActions />
        </View>
      </Page>
    </Document>
  );
};

// PDF Download Link Component
export const DownloadPDF = ({ salesData }) => (
  <PDFDownloadLink document={<MyDocument salesData={salesData} />} fileName="report.pdf">
    {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
  </PDFDownloadLink>
);
