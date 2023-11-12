import React from 'react';
import Match from './components/Match/Match'; // Adjust the path as necessary
import './UpcomingMatches.css'; 

// Define mockUpcomingMatches here
const mockUpcomingMatches = [
  {
    id: 1,
    court: 'Court 1',
    competitor1: 'Team 1',
    competitor2: 'Team 2',
    matchType: 'Groups',
    time: '10:00 AM'
  },
  {
    id: 2,
    court: 'Court 2',
    competitor1: 'Team 3',
    competitor2: 'Team 4',
    matchType: 'Quarter Finals',
    time: '11:00 AM'
  },
  // ... more matches
];

const UpcomingMatches = () => {
  return (
    <div className="upcoming-matches">
      {mockUpcomingMatches.map(match => (
        <Match key={match.id} match={match} />
      ))}
    </div>
  );
};

export default UpcomingMatches;
