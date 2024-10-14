const MarketingActivities = () => {
    const activities = [
      { activity: 'Event', goal: 'Increase brand awareness', budget: 1000, budgetUtilized: 800, engagementMetric: '200 attendees', kpi: 'Leads generated', status: 'Ongoing' },
    ];
  
    return (
      <div>
        <h2>Marketing Activities</h2>
        <table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Goal</th>
              <th>Budget</th>
              <th>Budget Utilized</th>
              <th>Engagement Metric</th>
              <th>Key Performance Indicator</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.activity}</td>
                <td>{activity.goal}</td>
                <td>{activity.budget}</td>
                <td>{activity.budgetUtilized}</td>
                <td>{activity.engagementMetric}</td>
                <td>{activity.kpi}</td>
                <td>{activity.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default MarketingActivities;
  