import React from 'react';
import Match from './components/Match/Match'; // Adjust the path as necessary
import './UpcomingMatches.css'; 

// Define mockUpcomingMatches here
const mockUpcomingMatches = [
  
  
  {
    id: 17,
    court: 'Court 1',
    competitor1: 'Yunhao Liang',
    competitor2: 'Hanzhang Sun',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:45 AM'
  },
  {
    id: 18,
    court: 'Court 2',
    competitor1: 'Veer Gowda',
    competitor2: 'Jacky Yang',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:45 AM'
  },
  {
    id: 19,
    court: 'Court 3',
    competitor1: 'Yijun Yuan',
    competitor2: 'Haoling Zheng',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:45 AM'
  },
  {
    id: 20,
    court: 'Court 4',
    competitor1: 'Rugved Kore',
    competitor2: 'Louis Leng',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:45 AM'
  },
  {
    id: 21,
    court: 'Court 5',
    competitor1: 'Yixiang Luo',
    competitor2: 'Jiangjiang Song',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:45 AM'
  },
  {
    id: 22,
    court: 'Court 6',
    competitor1: 'Matthew Dubov',
    competitor2: 'Ren Liang Lan',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:45 AM'
  },
  {
    id: 23,
    court: 'Court 7',
    competitor1: 'Yue Yuan',
    competitor2: 'Ruohan Zhu',
    matchType: 'Groups',
    event: 'Women\'s Singles',
    time: '11:45 AM'
  },
  {
    id: 24,
    court: 'Court 8',
    competitor1: 'Sky Arthur',
    competitor2: 'Sai Sadhana',
    matchType: 'Groups',
    event: 'Women\'s Singles',
    time: '11:45 AM'
  },
  {
    id: 17,
    court: 'Court 9',
    competitor1: 'Jerry Huang',
    competitor2: 'Fan He Hua',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:45 AM'
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
