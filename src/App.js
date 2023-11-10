import logo from './logo.svg';
import './App.css';
import React from 'react';
import Bracket from './Bracket';
import './App.css'; // If you have a CSS file

const mockTournamentData = [
  {
      name: "Round 1",
      matches: [
          { id: 1, competitor1: 'Team A', competitor2: 'Team B', winner: 'Team A' },
          { id: 2, competitor1: 'Team C', competitor2: 'Team D', winner: 'Team D' },
          { id: 3, competitor1: 'Team E', competitor2: 'Team F', winner: 'Team E' },
          { id: 4, competitor1: 'Team G', competitor2: 'Team H', winner: 'Team H' },
          // Add more matches as needed
      ],
  },
  {
      name: "Round 2",
      matches: [
          { id: 5, competitor1: 'Team A', competitor2: 'Team D', winner: 'Team A' },
          { id: 6, competitor1: 'Team E', competitor2: 'Team H', winner: 'Team E' },
          // Matches based on winners of Round 1
      ],
  },
  {
      name: "Semi-Finals",
      matches: [
          { id: 7, competitor1: 'Team A', competitor2: 'Team E', winner: 'Team A' },
          // Semi-final match
      ],
  },
  {
      name: "Finals",
      matches: [
          { id: 8, competitor1: 'Team A', competitor2: 'Team TBD', winner: null },
          // Final match, winner yet to be determined
      ],
  },
  // Add more rounds as necessary
];


const App = () => {
  // Use your mock data here
  return <Bracket tournamentData={mockTournamentData} />;
};




export default App;
