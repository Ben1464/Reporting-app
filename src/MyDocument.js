import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 20 },
  header: { fontSize: 18, marginBottom: 10, textDecoration: 'underline' },
  table: { marginTop: 10 },
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
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Product</Text>
              <Text style={styles.tableCell}>Pack Size</Text>
              <Text style={styles.tableCell}>Quantity</Text>
              <Text style={styles.tableCell}>Price</Text>
            </View>
            {salesData.map((entry, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.tableCell}>{entry.product}</Text>
                <Text style={styles.tableCell}>{entry.packSize}</Text>
                <Text style={styles.tableCell}>{entry.quantity}</Text>
                <Text style={styles.tableCell}>{entry.price}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text>No sales data available.</Text>
        )}
      </View>

      {/* Marketing Activities */}
      <View style={styles.section}>
        <Text style={styles.header}>Marketing Activities</Text>
        {marketingActivities.length ? (
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Activity</Text>
              <Text style={styles.tableCell}>Goal</Text>
              <Text style={styles.tableCell}>Budget</Text>
            </View>
            {marketingActivities.map((activity, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.tableCell}>{activity.activity}</Text>
                <Text style={styles.tableCell}>{activity.goal}</Text>
                <Text style={styles.tableCell}>{activity.budget}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text>No marketing activities available.</Text>
        )}
      </View>

      {/* Competitive Analysis */}
      <View style={styles.section}>
        <Text style={styles.header}>Competitive Analysis</Text>
        {competitiveAnalysis.length ? (
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Competitor</Text>
              <Text style={styles.tableCell}>Market Share</Text>
              <Text style={styles.tableCell}>Top Product</Text>
            </View>
            {competitiveAnalysis.map((comp, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.tableCell}>{comp.competitor}</Text>
                <Text style={styles.tableCell}>{comp.marketShare}</Text>
                <Text style={styles.tableCell}>{comp.topProduct}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text>No competitive analysis data available.</Text>
        )}
      </View>

      {/* Challenges Faced */}
      <View style={styles.section}>
        <Text style={styles.header}>Challenges Faced</Text>
        {challengesFaced.length ? (
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Challenge</Text>
              <Text style={styles.tableCell}>Impact</Text>
              <Text style={styles.tableCell}>Solution</Text>
              <Text style={styles.tableCell}>Urgency</Text>
            </View>
            {challengesFaced.map((challenge, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.tableCell}>{challenge.challenge}</Text>
                <Text style={styles.tableCell}>{challenge.impact}</Text>
                <Text style={styles.tableCell}>{challenge.solution}</Text>
                <Text style={styles.tableCell}>{challenge.urgency}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text>No challenges available.</Text>
        )}
      </View>

      {/* Top Selling Products */}
      <View style={styles.section}>
        <Text style={styles.header}>Top Selling Products</Text>
        {topSellingProducts.length ? (
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Competitor</Text>
              <Text style={styles.tableCell}>Product</Text>
              <Text style={styles.tableCell}>Units Sold</Text>
              <Text style={styles.tableCell}>Total Value</Text>
            </View>
            {topSellingProducts.map((product, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.tableCell}>{product.competitor}</Text>
                <Text style={styles.tableCell}>{product.product}</Text>
                <Text style={styles.tableCell}>{product.unitsSold}</Text>
                <Text style={styles.tableCell}>{product.totalValue}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text>No top selling products available.</Text>
        )}
      </View>

      {/* Upcoming Actions */}
      <View style={styles.section}>
        <Text style={styles.header}>Upcoming Actions</Text>
        {upcomingActions.length ? (
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Action</Text>
              <Text style={styles.tableCell}>Deadline</Text>
              <Text style={styles.tableCell}>Responsibility</Text>
            </View>
            {upcomingActions.map((action, idx) => (
              <View key={idx} style={styles.tableRow}>
                <Text style={styles.tableCell}>{action.action}</Text>
                <Text style={styles.tableCell}>{action.deadline}</Text>
                <Text style={styles.tableCell}>{action.responsibility}</Text>
              </View>
            ))}
          </View>
        ) : (
          <Text>No upcoming actions available.</Text>
        )}
      </View>
    </Page>
  </Document>
);

export default MyDocument;
