import React from 'react';
import './GroupStage.css'; // Make sure this is correctly imported

const GroupStage = ({ groups }) => {
  return (
    <div className="group-stage">
      {groups.map((group, index) => (
        <div key={index} className="group-container">
          <h3 className="group-title">Group {index + 1}</h3>
          <div className="group">
            <ul>
              {group.teams.map((team, teamIndex) => (
                <li key={teamIndex}>
                  {team.name} - Wins: {team.wins}, Losses: {team.losses}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupStage;