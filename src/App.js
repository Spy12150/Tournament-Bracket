import React, { useState } from 'react';
import Bracket from './components/Brackets/Bracket';
import TabsContainer from './components/tabs/TabsContainer';
import UpcomingMatches from './UpcomingMatches'; 
import GroupStage from './components/Groups/GroupStage'; // Import GroupStage component
import media1 from './images/lions_cup_logo.png'; // Update the path to your image
import './App.css';
import './components/tabs/Tabs.css';



const mockTournamentData = {
  "Men's Singles": [
    {
      name: "Round 1",
      matches: [
        { id: 1, competitor1: '#1  Group 1', competitor2: '#2  Group 4', winner: 'MS Team A', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 2, competitor1: '#1  Group 2', competitor2: '#2  Group 3', winner: 'MS Team D', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 3, competitor1: '#1  Group 3', competitor2: '#2  Group 2', winner: 'MS Team E', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 4, competitor1: '#1  Group 4', competitor2: '#2  Group 1', winner: 'MS Team G', scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
    {
      name: "Round 2",
      matches: [
        { id: 5, competitor1: 'TBD', competitor2: 'TBD', winner: null, scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 6, competitor1: 'TBD', competitor2: 'TBD', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
    {
      name: "Final",
      matches: [
        { id: 7, competitor1: 'TBD', competitor2: 'TBD', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
  ],
  "Men's Doubles": [
    {
      name: "Round 1",
      matches: [
        { id: 1, competitor1: '#1  Group 1', competitor2: '#2  Group 2', winner: 'MS Team A', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 2, competitor1: '#1  Group 2', competitor2: '#2  Group 1', winner: 'MS Team D', scores: [[0, 0, 0], [0, 0, 0]] },
      ],
    },
    {
      name: "Final",
      matches: [
        { id: 3, competitor1: 'TBD', competitor2: 'TBD', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
    
  ],
  "Women's Singles": [
    {
      name: "Final",
      matches: [
        { id: 3, competitor1: '#1 Group 1', competitor2: '#2 Group 1', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
  ],
  "Women's Doubles": [
    {
      name: "Final",
      matches: [
        { id: 3, competitor1: 'S Tom + Y Yuan', competitor2: 'N Natarajan + J Huang', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
  ],
  "Mixed Doubles": [
    {
      name: "Round 1",
      matches: [
        { id: 1, competitor1: '#1  Group 1', competitor2: '#2  Group 2', winner: 'MS Team A', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 2, competitor1: '#1  Group 2', competitor2: '#2  Group 1', winner: 'MS Team D', scores: [[0, 0, 0], [0, 0, 0]] },
      ],
    },
    {
      name: "Final",
      matches: [
        { id: 3, competitor1: 'TBD', competitor2: 'TBD', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
    
  ],
};


const mockGroupData = {
  "Men's Singles": [
    {
      teams: [
        
        { name: 'Jerry Huang', wins: 0, losses: 0 },
        { name: 'Yunhao Liang', wins: 0, losses: 0 },
        
        { name: 'Hanzhang Sun', wins: 0, losses: 0 }
      ]
    },
    {
      teams: [
        { name: 'Veer Gowda', wins: 0, losses: 0 },
        { name: 'Yijun Yuan', wins: 0, losses: 0 },
        { name: 'Haoling Zheng', wins: 0, losses: 0 },
        { name: 'Jacky Yang', wins: 0, losses: 0 },
      ]
    },
    {
      teams: [
        
        { name: 'Aditya Pandya', wins: 0, losses: 0 },
        { name: 'Rugved Kore', wins: 0, losses: 0 },
        { name: 'Louis Leng', wins: 0, losses: 0 },
      ]
    },
    {
      teams: [
        { name: 'Yixiang Luo', wins: 0, losses: 0 },
        { name: 'Matthew Dubov', wins: 0, losses: 0 },
        { name: 'Ren Liang Lan', wins: 0, losses: 0 },
        { name: 'Jiangjiang Song', wins: 0, losses: 0 }, // Repeated
         // Repeated
      ]
    },
    // ... Other categories remain unchanged
  ],
  "Men's Doubles": [
    {
      teams: [
        { name: 'J Song + Y Yuan', wins: 0, losses: 0 },
        
        { name: 'J Yang + L Leng', wins: 0, losses: 0 },
        { name: 'H Sun + W Jiang', wins: 0, losses: 0 },
      ]
    },
    {
      teams: [
        { name: 'J Huang + Y Liang', wins: 0, losses: 0 },
        { name: 'V Gowda + M Nordin', wins: 0, losses: 0 },
        { name: 'J Fan + R Liang', wins: 0, losses: 0 }
      ]
    }
  ],
  "Women's Singles": [
    {
      teams: [
        { name: 'Ruohan Zhu', wins: 0, losses: 0 },
        { name: 'Sai Sadhana', wins: 0, losses: 0 },
        { name: 'Jiayi Huang', wins: 0, losses: 0 },
        { name: 'Yue Yuan', wins: 0, losses: 0 }
      ]
    }
  ],
  "Mixed Doubles": [
    {
      teams: [
        { name: 'J Yang + R Zhu', wins: 0, losses: 0 },
        { name: 'R Kore + N Natarajan', wins: 0, losses: 0 },
        { name: 'J Jiang + Y Yuan', wins: 0, losses: 0 },
      ]
    },
    {
      teams: [
        { name: 'M Dubov + S Arthur', wins: 0, losses: 0 },
        { name: 'M Nordin + S Sadhana', wins: 0, losses: 0 },
        { name: 'H Sun + S Tom', wins: 0, losses: 0 },
      ]
    }
  ],
};

const App = () => {
  const [activeTab, setActiveTab] = useState("Men's Singles");

  const renderContent = () => {
    if (activeTab === 'Upcoming Matches') {
      return <UpcomingMatches />;
    } else {
      return <Bracket tournamentData={mockTournamentData[activeTab]} />;
    }
  };

  const renderGroupStage = () => {
    // Only render GroupStage for specific tabs
    if (['Men\'s Singles', 'Men\'s Doubles', 'Women\'s Singles', 'Women\'s Doubles', 'Mixed Doubles'].includes(activeTab)) {
      return <GroupStage groups={mockGroupData[activeTab]} />;
    }
    return null;
  };

  return (
    <div className="App">
      <h1 className="tournament-title">Lions Cup</h1>
      <div className="tabs-container" style={{ marginBottom: '20px' }}>
        <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {renderGroupStage()}
      {renderContent()}
      <div className="footer-image">
        <img src={media1} alt="Lions Cup" />
      </div>
    </div>
  );
};

export default App;


