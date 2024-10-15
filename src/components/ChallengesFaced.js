import React, { useState, useEffect } from 'react';

const ChallengesFaced = ({ setChallengesData }) => {
  const [challenges, setChallenges] = useState([
    { challenge: '', impact: '', solution: '', urgency: '' },
  ]);

  // Sync the parent state (setChallengesData) with the local state when it changes
  useEffect(() => {
    setChallengesData(challenges);
  }, [challenges, setChallengesData]);

  // Handle change in input fields and update state
  const handleChange = (index, field, value) => {
    const updatedChallenges = challenges.map((ch, i) =>
      i === index ? { ...ch, [field]: value } : ch
    );
    setChallenges(updatedChallenges);
  };

  // Add a new empty row for challenge input
  const addChallenge = () => {
    setChallenges([
      ...challenges,
      { challenge: '', impact: '', solution: '', urgency: '' },
    ]);
  };

  return (
    <div>
      <h2>Challenges Faced</h2>
      <button onClick={addChallenge}>Add Challenge</button>
      <table>
        <thead>
          <tr>
            <th>Challenge</th>
            <th>Impact on Business</th>
            <th>Proposed Solution</th>
            <th>Urgency</th>
          </tr>
        </thead>
        <tbody>
          {challenges.map((ch, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={ch.challenge}
                  onChange={(e) => handleChange(index, 'challenge', e.target.value)}
                  placeholder="Enter the challenge"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ch.impact}
                  onChange={(e) => handleChange(index, 'impact', e.target.value)}
                  placeholder="Impact on business"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ch.solution}
                  onChange={(e) => handleChange(index, 'solution', e.target.value)}
                  placeholder="Proposed solution"
                />
              </td>
              <td>
                <select
                  value={ch.urgency}
                  onChange={(e) => handleChange(index, 'urgency', e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChallengesFaced;
