import React from 'react';
import Match from './components/Match/Match'; // Adjust the path as necessary
import './UpcomingMatches.css'; 

// Define mockUpcomingMatches here
const mockUpcomingMatches = [
  
  
  {
    id: 17,
    court: 'Court 6',
    competitor1: 'Yixiang Luo',
    competitor2: 'Hanzhang Sun',
    matchType: 'Quarter Finals',
    event: 'Men\'s Singles',
    time: '1:30 PM'
  },
  {
    id: 17,
    court: 'Court 8',
    competitor1: 'Veer Gowda',
    competitor2: 'Aditya Pandya',
    matchType: 'Quarter Finals',
    event: 'Men\'s Singles',
    time: '1:30 PM'
  },
  {
    id: 17,
    court: 'Court 5',
    competitor1: 'Rugved Kore',
    competitor2: 'Yijun Yuan',
    matchType: 'Quarter Finals',
    event: 'Men\'s Singles',
    time: '1:30 PM'
  },
  {
    id: 17,
    court: 'Court 4',
    competitor1: 'Ren Liang Lan',
    competitor2: 'Yunhao Liang',
    matchType: 'Quarter Finals',
    event: 'Men\'s Singles',
    time: '1:30 PM'
  },
{
  id: 17,
  court: 'Court 7',
  competitor1: 'Sai Sadhana',
  competitor2: 'Yue Yuan',
  matchType: 'Quarter Finals',
  event: 'Women\'s Singles',
  time: '1:30 PM'
},
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
