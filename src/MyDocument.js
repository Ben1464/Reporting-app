import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 20 },
  header: { fontSize: 18, marginBottom: 10, textDecoration: 'underline' },
  table: { marginTop: 10 },
  tableHeader: { fontSize: 14, fontWeight: 'bold', marginBottom: 5 },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, paddingVertical: 5 },
  tableCell: { flex: 1, textAlign: 'left', fontSize: 10 },
});

const MyDocument = ({
  salesData,
  marketingActivities,
  competitiveAnalysis,
  challengesFaced,
  topSellingProducts,
  upcomingActions,
}) => (
  <Document>
    <Page style={styles.page}>
      {/* Sales Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Sales Data</Text>
        {salesData.length ? (
          salesData.map((entry, idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={styles.tableCell}>{entry.product}</Text>
              <Text style={styles.tableCell}>{entry.packSize}</Text>
              <Text style={styles.tableCell}>{entry.quantity}</Text>
              <Text style={styles.tableCell}>{entry.price}</Text>
            </View>
          ))
        ) : (
          <Text>No sales data available.</Text>
        )}
      </View>

      {/* Marketing Activities */}
      <View style={styles.section}>
        <Text style={styles.header}>Marketing Activities</Text>
        {marketingActivities.length ? (
          marketingActivities.map((activity, idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={styles.tableCell}>{activity.activity}</Text>
              <Text style={styles.tableCell}>{activity.goal}</Text>
              <Text style={styles.tableCell}>{activity.budget}</Text>
            </View>
          ))
        ) : (
          <Text>No marketing activities available.</Text>
        )}
      </View>

      {/* Competitive Analysis */}
      <View style={styles.section}>
        <Text style={styles.header}>Competitive Analysis</Text>
        {competitiveAnalysis.length ? (
          competitiveAnalysis.map((comp, idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={styles.tableCell}>{comp.competitor}</Text>
              <Text style={styles.tableCell}>{comp.marketShare}</Text>
              <Text style={styles.tableCell}>{comp.topProduct}</Text>
            </View>
          ))
        ) : (
          <Text>No competitive analysis data available.</Text>
        )}
      </View>

      {/* Challenges Faced */}
      <View style={styles.section}>
        <Text style={styles.header}>Challenges Faced</Text>
        {challengesFaced.length ? (
          challengesFaced.map((challenge, idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={styles.tableCell}>{challenge.challenge}</Text>
              <Text style={styles.tableCell}>{challenge.impact}</Text>
              <Text style={styles.tableCell}>{challenge.solution}</Text>
              <Text style={styles.tableCell}>{challenge.urgency}</Text>
            </View>
          ))
        ) : (
          <Text>No challenges available.</Text>
        )}
      </View>

      {/* Top Selling Products */}
      <View style={styles.section}>
        <Text style={styles.header}>Top Selling Products</Text>
        {topSellingProducts.length ? (
          topSellingProducts.map((product, idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={styles.tableCell}>{product.competitor}</Text>
              <Text style={styles.tableCell}>{product.product}</Text>
              <Text style={styles.tableCell}>{product.unitsSold}</Text>
              <Text style={styles.tableCell}>{product.totalValue}</Text>
            </View>
          ))
        ) : (
          <Text>No top selling products available.</Text>
        )}
      </View>

      {/* Upcoming Actions */}
      <View style={styles.section}>
        <Text style={styles.header}>Upcoming Actions</Text>
        {upcomingActions.length ? (
          upcomingActions.map((action, idx) => (
            <View key={idx} style={styles.tableRow}>
              <Text style={styles.tableCell}>{action.action}</Text>
              <Text style={styles.tableCell}>{action.description}</Text>
              <Text style={styles.tableCell}>{action.status}</Text>
            </View>
          ))
        ) : (
          <Text>No upcoming actions available.</Text>
        )}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
