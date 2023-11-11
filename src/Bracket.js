// Bracket.js
import React from 'react';
import Round from './Round';
import './Bracket.css';

const Bracket = ({ tournamentData = [] }) => {
  return (
    <div className="bracket">
      {tournamentData.map((round, index) => (
        <Round key={index} round={round} />
      ))}
    </div>
  );
};

export default Bracket;
