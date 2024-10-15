import React, { useState, useEffect } from 'react';

const CompetitiveAnalysis = ({ setCompetitiveData }) => {
  const [competitors, setCompetitors] = useState([
    { competitor: '', marketShare: '', topProduct: '', activities: '', description: '' },
  ]);

  // Sync the parent state with local state
  useEffect(() => {
    setCompetitiveData(competitors);
  }, [competitors, setCompetitiveData]);

  // Handle changes in input fields and update state
  const handleChange = (index, field, value) => {
    const updatedCompetitors = competitors.map((comp, i) =>
      i === index ? { ...comp, [field]: value } : comp
    );
    setCompetitors(updatedCompetitors);
  };

  // Add a new empty competitor entry
  const addCompetitor = () => {
    setCompetitors([
      ...competitors,
      { competitor: '', marketShare: '', topProduct: '', activities: '', description: '' },
    ]);
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
                  placeholder="Enter competitor name"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={comp.marketShare}
                  onChange={(e) => handleChange(index, 'marketShare', e.target.value)}
                  placeholder="Enter market share"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={comp.topProduct}
                  onChange={(e) => handleChange(index, 'topProduct', e.target.value)}
                  placeholder="Top product"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={comp.activities}
                  onChange={(e) => handleChange(index, 'activities', e.target.value)}
                  placeholder="Activities"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={comp.description}
                  onChange={(e) => handleChange(index, 'description', e.target.value)}
                  placeholder="Brief description"
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
