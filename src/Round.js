// Round.js
import React from 'react';
import Match from './components/Match/Match'; // Adjust the path as necessary

const Round = ({ round }) => {
  return (
    <div className="round">
      <h3>{round.name}</h3>
      {round.matches.map((match, index) => (
        <Match key={index} match={match} />
      ))}
    </div>
  );
};

export default Round;
