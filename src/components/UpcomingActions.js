import React, { useState } from 'react';

const UpcomingActions = () => {
  const [actions, setActions] = useState([
    { action: '', description: '', status: '', expectedOutcome: '', timeline: '', followUpDates: '', remarks: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedActions = [...actions];
    updatedActions[index][field] = value;
    setActions(updatedActions);
  };

  const addAction = () => {
    setActions([...actions, { action: '', description: '', status: '', expectedOutcome: '', timeline: '', followUpDates: '', remarks: '' }]);
  };

  return (
    <div>
      <h2>Upcoming Actions</h2>
      <button onClick={addAction}>Add Action</button>
      <table>
        <thead>
          <tr>
            <th>Action</th>
            <th>Description</th>
            <th>Status</th>
            <th>Expected Outcome</th>
            <th>Timeline</th>
            <th>Follow Up Dates</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {actions.map((action, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={action.action}
                  onChange={(e) => handleChange(index, 'action', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={action.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                />
              </td>
              <td>
                <select
                  value={action.status}
                  onChange={(e) => handleChange(index, 'status', e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={action.expectedOutcome}
                  onChange={(e) => handleChange(index, 'expectedOutcome', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={action.timeline}
                  onChange={(e) => handleChange(index, 'timeline', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={action.followUpDates}
                  onChange={(e) => handleChange(index, 'followUpDates', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={action.remarks}
                  onChange={(e) => handleChange(index, 'remarks', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingActions;
