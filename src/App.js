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
        { id: 1, competitor1: 'MS Team A', competitor2: 'MS Team B', winner: 'MS Team A', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 2, competitor1: 'MS Team C', competitor2: 'MS Team D', winner: 'MS Team D', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 3, competitor1: 'MS Team E', competitor2: 'MS Team F', winner: 'MS Team E', scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 4, competitor1: 'MS Team G', competitor2: 'MS Team H', winner: 'MS Team G', scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
    {
      name: "Round 2",
      matches: [
        { id: 5, competitor1: 'MS Team A', competitor2: 'MS Team D', winner: null, scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 6, competitor1: 'MS Team E', competitor2: 'MS Team G', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
    {
      name: "Final",
      matches: [
        { id: 7, competitor1: 'Winner of Match 5', competitor2: 'Winner of Match 6', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
  ],
  "Men's Doubles": [
    {
      name: "Round 1",
      matches: [
        { id: 1, competitor1: 'MD Team A', competitor2: 'MD Team B', winner: null, scores: [[0, 0, 0], [0, 0, 0]] },
        { id: 2, competitor1: 'MD Team C', competitor2: 'MD Team D', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
    {
      name: "Final",
      matches: [
        { id: 3, competitor1: 'Winner of Match 1', competitor2: 'Winner of Match 2', winner: null, scores: [[0, 0, 0], [0, 0, 0]] }
      ],
    },
  ],
  "Women's Singles": [
    // ... Similar structure to Men's Doubles
  ],
  "Women's Doubles": [
    // ... Similar structure to Men's Doubles
  ],
  "Mixed Doubles": [
    // ... Similar structure to Men's Doubles
  ],
};


const mockGroupData = {
  "Men's Singles": [
    {
      teams: [
        { name: 'MS Team A', wins: 2, losses: 1 },
        { name: 'MS Team B', wins: 1, losses: 2 },
        { name: 'MS Team C', wins: 3, losses: 0 },
        { name: 'MS Team D', wins: 0, losses: 3 }
      ]
    },
    {
      teams: [
        { name: 'MS Team E', wins: 1, losses: 2 },
        { name: 'MS Team F', wins: 2, losses: 1 },
        { name: 'MS Team G', wins: 2, losses: 1 },
        { name: 'MS Team H', wins: 1, losses: 2 }
      ]
    },
    // Two more groups for Men's Singles...
  ],
  "Men's Doubles": [
    {
      teams: [
        { name: 'MD Team A', wins: 2, losses: 0 },
        { name: 'MD Team B', wins: 0, losses: 2 }
      ]
    },
    {
      teams: [
        { name: 'MD Team C', wins: 1, losses: 1 },
        { name: 'MD Team D', wins: 1, losses: 1 }
      ]
    }
  ],
  // Similar structure for "Women's Singles", "Women's Doubles", and "Mixed Doubles"
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

  return (
    <div className="App">
      <h1 className="tournament-title">Lions Cup</h1>
      <div className="tabs-container" style={{ marginBottom: '20px' }}>
        <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {activeTab === "Men's Singles" ? 
        <GroupStage groups={mockGroupData["Men's Singles"]} /> : 
        <GroupStage groups={mockGroupData[activeTab]} />}
      {renderContent()}
      <div className="footer-image">
        <img src={media1} alt="Lions Cup" />
      </div>
    </div>
  );
};

export default App;
