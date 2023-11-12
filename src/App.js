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
        { id: 1, competitor1: 'Hanzhang Sun', competitor2: 'Yixiang Luo', winner: 'MS Team A', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 2, competitor1: 'Veer Gowda', competitor2: 'Aditya Pandya', winner: 'MS Team D', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 3, competitor1: 'Rugved Kore', competitor2: 'Yijun Yuan', winner: 'MS Team E', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 4, competitor1: 'Ren Liang Lan', competitor2: 'Yunhao Liang', winner: 'MS Team G', scores: [[0, 0, 0], [0, 0, 0]] }
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
        { id: 1, competitor1: 'Jacky Yang + Hehua Fan', competitor2: 'Jian Wutan + Victor Lin', winner: 'MS Team A', scores: [[0, 0, 0], [0, 0, 0]] },

      ],
    },
    {
      name: "Round 2",
      matches: [
        { id: 1, competitor1: 'HanZhang Sun + Weijia Jiang', competitor2: 'Winner of Round 1', winner: 'MS Team A', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 2, competitor1: 'Aditya Pandya + Rugved Kore', competitor2: 'Jerry Huang + YunHao Liang', winner: 'MS Team D', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 1, competitor1: 'John Fan + Ren Liang Lan', competitor2: 'Louis Leng + Zheng Haoling', winner: 'MS Team A', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 1, competitor1: 'Jiangjiang Song + Yijun Yuan', competitor2: 'Dragon + Veer Gowda', winner: 'MS Team A', scores: [[0, 0, 0], [0, 0, 0]] },
      ],
    },
    {
      name: "Round 3",
      matches: [
        { id: 3, competitor1: 'Winner of match 1', competitor2: 'Winner of Match 2', winner: null, scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 3, competitor1: 'Winner of Match 3  ', competitor2: 'Winner of Match 4', winner: null, scores: [[0, 0, 0], [0, 0, 0]] },
      ],
    },
    {
      name: "Finals",
      matches: [
        { id: 3, competitor1: 'Winner of match 1', competitor2: 'Winner of Match 2', winner: null, scores: [[0, 0, 0], [0, 0, 0]] },
      ],
    },
    
  ],
  "Women's Singles": [
    {
      name: "Final",
      matches: [
        { id: 3, competitor1: 'Yoyo', competitor2: 'Sai Sadhana', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
  ],
  "Women's Doubles": [
    {
      name: "Round 1",
      matches: [
        { id: 3, competitor1: 'Ruohan Zhu + Xindi Shao', competitor2: 'Nandini Natarajan + Sky Arthur', winner: null, scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 3, competitor1: 'Yiming Tian + Yinuo Liu', competitor2: 'Sai Sadhana + Yue Yuan', winner: null, scores: [[0, 0, 0], [0, 0, 0]] },
      ],
    },
    {
      name: "Finals",
      matches: [
        { id: 3, competitor1: 'Winner of match 1', competitor2: 'Winner of Match 2', winner: null, scores: [[0, 0, 0], [0, 0, 0]] },
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
        
        { name: 'Jerry Huang', wins: 0, losses: 6 },
        { name: 'Yunhao Liang', wins: 4, losses: 2 },
        { name: 'Fan He Hua', wins: 2, losses: 4 },
        { name: 'Hanzhang Sun', wins: 6, losses: 0 }
      ]
    },
    {
      teams: [
        { name: 'Veer Gowda', wins: 6, losses: 0 },
        { name: 'Yijun Yuan', wins: 4, losses: 2 },
        { name: 'Haoling Zheng', wins: 2, losses: 5 },
        { name: 'Jacky Yang', wins: 1, losses: 5 },
      ]
    },
    {
      teams: [
        
        { name: 'Aditya Pandya', wins: 3, losses: 2 },
        { name: 'Rugved Kore', wins: 4, losses: 2 },
        { name: 'Louis Leng', wins: 1, losses: 4 }, 
      ]
    },
    {
      teams: [
        { name: 'Yixiang Luo', wins: 4, losses: 2},
        { name: 'Matthew Dubov', wins: 0, losses: 6 },
        { name: 'Ren Liang Lan', wins: 6, losses: 0 },
        { name: 'Jiangjiang Song', wins: 2, losses: 4 }, 
      ]
    },
    // ... Other categories remain unchanged
  ],
  "Women's Singles": [
    {
      teams: [
        { name: 'Ruohan Zhu', wins: 2, losses: 4 },
        { name: 'Sai Sadhana', wins: 4, losses: 2 },
        { name: 'Sky Arthur', wins: 0, losses: 4 },
        { name: 'Yue Yuan', wins: 6, losses: 0 }
        
      ]
    }
  ],
  "Mixed Doubles": [
    {
      teams: [
        { name: 'J Yang + R Zhu', wins: 0, losses: 0 },
        { name: 'R Kore + N Natarajan', wins: 0, losses: 0 },
        { name: 'J Jiang + Y Yuan', wins: 0, losses: 0 },
        { name: 'H Feng+ Y Tian', wins: 0, losses: 0 },
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


