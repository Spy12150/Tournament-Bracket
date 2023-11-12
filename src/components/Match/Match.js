import React from 'react';

const Match = ({ match }) => {
  const isUpcomingMatch = match.court && match.time;

  return (
    <div className="match">
      {isUpcomingMatch ? (
        <>
          <div className="match-row">
            <span>{match.court}</span>
          </div>
          <div className="match-row">
            <span>{match.competitor1} vs {match.competitor2}</span>
          </div>
          <div className="match-row">
            <span>{match.matchType}</span>
          </div>
          <div className="match-row">
            <span>{match.time}</span>
          </div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Match;
