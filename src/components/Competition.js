const CompetitiveAnalysis = () => {
    const competitors = [
      { competitor: 'Competitor A', marketShare: '20%', topProduct: 'Product X', activities: 'Promotion', description: 'Heavy discounting' },
    ];
  
    return (
      <div>
        <h2>Competitive Analysis</h2>
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
                <td>{comp.competitor}</td>
                <td>{comp.marketShare}</td>
                <td>{comp.topProduct}</td>
                <td>{comp.activities}</td>
                <td>{comp.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CompetitiveAnalysis;
  