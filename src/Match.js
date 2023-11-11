// Match.js
import React from 'react';

const Match = ({ match }) => {
  return (
    <div className="match">
      <div className="match-detail">
        <span className="team">{match.competitor1}</span>
        <div className="scores">
          {match.scores[0].map((score, index) => (
            <span key={index} className="score">{score}</span>
          ))}
        </div>
      </div>
      <div className="match-detail">
        <span className="team">{match.competitor2}</span>
        <div className="scores">
          {match.scores[1].map((score, index) => (
            <span key={index} className="score">{score}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Match;
