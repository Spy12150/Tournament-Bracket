import React from 'react';

const Match = ({ match }) => {
  return (
    <div className="match">
      <div className="competitor">{match.competitor1}</div>
      <div className="competitor">{match.competitor2}</div>
      {/* Add more details as needed */}
    </div>
  );
};

export default Match;