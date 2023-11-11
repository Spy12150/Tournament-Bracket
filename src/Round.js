// Round.js
import React from 'react';
import Match from './Match';

const Round = ({ round }) => {
  return (
    <div className="round">
      {round.matches.map((match, index) => (
        <Match key={index} match={match} />
      ))}
    </div>
  );
};

export default Round;
