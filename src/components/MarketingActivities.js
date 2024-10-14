import React, { useState } from 'react';

const MarketingActivities = ({ setMarketingData }) => {
  const [activities, setActivities] = useState([
    { activity: '', goal: '', budget: '', budgetUtilized: '', engagementMetric: '', kpi: '', status: '' },
  ]);

  // Update both local and parent state
  const handleChange = (index, field, value) => {
    const updatedActivities = [...activities];
    updatedActivities[index][field] = value;
    setActivities(updatedActivities);  // Update local state
    setMarketingData(updatedActivities);  // Update parent state
  };

  // Add a new activity entry
  const addActivity = () => {
    const newActivities = [
      ...activities,
      { activity: '', goal: '', budget: '', budgetUtilized: '', engagementMetric: '', kpi: '', status: '' },
    ];
    setActivities(newActivities);
    setMarketingData(newActivities);  // Also update parent state
  };

  return (
    <div>
      <h2>Marketing Activities</h2>
      <button onClick={addActivity}>Add Activity</button>
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
              <td>
                <input
                  type="text"
                  value={activity.activity}
                  onChange={(e) => handleChange(index, 'activity', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={activity.goal}
                  onChange={(e) => handleChange(index, 'goal', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={activity.budget}
                  onChange={(e) => handleChange(index, 'budget', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={activity.budgetUtilized}
                  onChange={(e) => handleChange(index, 'budgetUtilized', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={activity.engagementMetric}
                  onChange={(e) => handleChange(index, 'engagementMetric', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={activity.kpi}
                  onChange={(e) => handleChange(index, 'kpi', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={activity.status}
                  onChange={(e) => handleChange(index, 'status', e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Completed">Completed</option>
                  <option value="Planned">Planned</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketingActivities;
