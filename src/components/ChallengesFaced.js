import React, { useState } from 'react';

const ChallengesFaced = ({ setChallengesData }) => {
  const [challenges, setChallenges] = useState([
    { challenge: '', impact: '', solution: '', urgency: '' },
  ]);

  // Update both local state and parent state when a change is made
  const handleChange = (index, field, value) => {
    const updatedChallenges = [...challenges];
    updatedChallenges[index][field] = value;
    setChallenges(updatedChallenges); // Update local state
    setChallengesData(updatedChallenges); // Update parent state
  };

  // Add a new challenge
  const addChallenge = () => {
    const newChallenges = [
      ...challenges,
      { challenge: '', impact: '', solution: '', urgency: '' },
    ];
    setChallenges(newChallenges);
    setChallengesData(newChallenges); // Also update parent state
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
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ch.impact}
                  onChange={(e) => handleChange(index, 'impact', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={ch.solution}
                  onChange={(e) => handleChange(index, 'solution', e.target.value)}
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
