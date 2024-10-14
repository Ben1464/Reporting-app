import React, { useState } from 'react';

const CompetitiveAnalysis = ({ setCompetitiveData }) => {
  const [competitors, setCompetitors] = useState([
    { competitor: '', marketShare: '', topProduct: '', activities: '', description: '' },
  ]);

  // Update both local and parent state
  const handleChange = (index, field, value) => {
    const updatedCompetitors = [...competitors];
    updatedCompetitors[index][field] = value;
    setCompetitors(updatedCompetitors);  // Update local state
    setCompetitiveData(updatedCompetitors);  // Update parent state
  };

  // Add a new competitor entry
  const addCompetitor = () => {
    const newCompetitors = [
      ...competitors,
      { competitor: '', marketShare: '', topProduct: '', activities: '', description: '' },
    ];
    setCompetitors(newCompetitors);
    setCompetitiveData(newCompetitors);  // Also update parent state
  };

  return (
    <div>
      <h2>Competitive Analysis</h2>
      <button onClick={addCompetitor}>Add Competitor</button>
      <table>
        <thead>
          <tr>
            <th>Competitor</th>
            <th>Market Share</th>
            <th>Top Product</th>
            <th>Activities</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {competitors.map((comp, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={comp.competitor}
                  onChange={(e) => handleChange(index, 'competitor', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={comp.marketShare}
                  onChange={(e) => handleChange(index, 'marketShare', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={comp.topProduct}
                  onChange={(e) => handleChange(index, 'topProduct', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={comp.activities}
                  onChange={(e) => handleChange(index, 'activities', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={comp.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompetitiveAnalysis;
