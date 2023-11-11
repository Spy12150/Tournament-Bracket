// UpcomingMatches.js
import React from 'react';
import './UpcomingMatches.css';

const matchesData = [
    {
      id: 1,
      competitor1: 'Team 1',
      competitor2: 'Team 2',
      court: 'Court 1',
      time: '10:00 AM'
    },
    {
      id: 2,
      competitor1: 'Team 3',
      competitor2: 'Team 4',
      court: 'Court 2',
      time: '10:45 AM'
    },
    {
      id: 3,
      competitor1: 'Team 5',
      competitor2: 'Team 6',
      court: 'Court 1',
      time: '11:30 AM'
    },
    {
      id: 4,
      competitor1: 'Team 7',
      competitor2: 'Team 8',
      court: 'Court 3',
      time: '12:15 PM'
    },
    // ... more matches as needed
  ];

const UpcomingMatches = ( ) => {
    return (
        <div>
          <h2>Upcoming Matches</h2>
          <ul>
            {matchesData.map(match => ( // Use matchesData here
              <li key={match.id}>
                {match.competitor1} vs {match.competitor2} - Court: {match.court} - Time: {match.time}
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default UpcomingMatches;