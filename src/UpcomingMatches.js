import React from 'react';
import Match from './components/Match/Match'; // Adjust the path as necessary
import './UpcomingMatches.css'; 

// Define mockUpcomingMatches here
const mockUpcomingMatches = [
  {
    id: 1,
    court: 'Court 1',
    competitor1: 'Jerry Huang',
    competitor2: 'Yunhao Liang ',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '10:15 AM'
  },
  {
    id: 2,
    court: 'Court 2',
    competitor1: 'Veer Gowda',
    competitor2: 'Yijun Yuan ',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '10:15 AM'
  },
  {
    id: 3,
    court: 'Court 3',
    competitor1: 'Haoling Zheng',
    competitor2: 'Jacky Yang',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '10:15 AM'
  },
  {
    id: 4,
    court: 'Court 4',
    competitor1: 'Aditya Pandya',
    competitor2: 'Rugved Kore',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '10:15 AM'
  },
  {
    id: 5,
    court: 'Court 5',
    competitor1: 'Yixiang Luo',
    competitor2: 'Matthew Dubov',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '10:15 AM'
  },
  {
    id: 6,
    court: 'Court 6',
    competitor1: 'Ren Liang Lan',
    competitor2: 'Jiangjiang Song',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '10:15 AM'
  },
  {
    id: 7,
    court: 'Court 7',
    competitor1: 'Ruohan Zhu',
    competitor2: 'Sai Sadhana',
    matchType: 'Groups',
    event: 'Women\'s Singles',
    time: '10:15 AM'
  },
  {
    id: 8,
    court: 'Court 8',
    competitor1: 'Jiayi Huang',
    competitor2: 'Yue Yuan',
    matchType: 'Groups',
    event: 'Women\'s Singles',
    time: '10:15 AM'
  },
  {
    id: 1,
    court: 'Court 9',
    competitor1: 'Fan He Hua',
    competitor2: 'Hanzhang Sun',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '10:15 AM'
  },
  {
    id: 9,
    court: 'Court 1',
    competitor1: 'Jerry Huang',
    competitor2: 'Hanzhang Sun',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:10 AM'
  },
  {
    id: 10,
    court: 'Court 2',
    competitor1: 'Veer Gowda',
    competitor2: 'Haoling Zheng',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:10 AM'
  },
  {
    id: 11,
    court: 'Court 3',
    competitor1: 'Yijun Yuan',
    competitor2: 'Jacky Yang',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:10 AM'
  },
  {
    id: 12,
    court: 'Court 4',
    competitor1: 'Aditya Pandya',
    competitor2: 'Louis Leng',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:10 AM'
  },
  {
    id: 13,
    court: 'Court 5',
    competitor1: 'Yixiang Luo',
    competitor2: 'Ren Liang Lan',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:10 AM'
  },
  {
    id: 14,
    court: 'Court 6',
    competitor1: 'Matthew Dubov',
    competitor2: 'Jiangjiang Song',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:10 AM'
  },
  {
    id: 15,
    court: 'Court 7',
    competitor1: 'Sky Arthur ',
    competitor2: 'Ruohan Zhu',
    matchType: 'Groups',
    event: 'Women\'s Singles',
    time: '11:10 AM'
  },
  {
    id: 16,
    court: 'Court 8',
    competitor1: 'Sai Sadhana',
    competitor2: 'Yue Yuan',
    matchType: 'Groups',
    event: 'Women\'s Singles',
    time: '11:10 AM'
  },
  {
    id: 9,
    court: 'Court 9',
    competitor1: 'Yunhao Liang',
    competitor2: 'Fan He Hua',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '11:10 AM'
  },
  {
    id: 17,
    court: 'Court 1',
    competitor1: 'Yunhao Liang',
    competitor2: 'Hanzhang Sun',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '1:00 PM'
  },
  {
    id: 18,
    court: 'Court 2',
    competitor1: 'Veer Gowda',
    competitor2: 'Jacky Yang',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '1:00 PM'
  },
  {
    id: 19,
    court: 'Court 3',
    competitor1: 'Yijun Yuan',
    competitor2: 'Haoling Zheng',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '1:00 PM'
  },
  {
    id: 20,
    court: 'Court 4',
    competitor1: 'Rugved Kore',
    competitor2: 'Louis Leng',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '1:00 PM'
  },
  {
    id: 21,
    court: 'Court 5',
    competitor1: 'Yixiang Luo',
    competitor2: 'Jiangjiang Song',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '1:00 PM'
  },
  {
    id: 22,
    court: 'Court 6',
    competitor1: 'Matthew Dubov',
    competitor2: 'Ren Liang Lan',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '1:00 PM'
  },
  {
    id: 23,
    court: 'Court 7',
    competitor1: 'Jiayi Huang',
    competitor2: 'Ruohan Zhu',
    matchType: 'Groups',
    event: 'Women\'s Singles',
    time: '1:00 PM'
  },
  {
    id: 24,
    court: 'Court 8',
    competitor1: 'Sky Arthur',
    competitor2: 'Sai Sadhana',
    matchType: 'Groups',
    event: 'Women\'s Singles',
    time: '1:00 PM'
  },
  {
    id: 17,
    court: 'Court 9',
    competitor1: 'Jerry Huang',
    competitor2: 'Fan He Hua',
    matchType: 'Groups',
    event: 'Men\'s Singles',
    time: '1:00 PM'
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
