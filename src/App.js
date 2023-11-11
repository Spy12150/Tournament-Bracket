
import './App.css';
import React, { useState } from 'react';
import Bracket from './components/Brackets/Bracket';
import './App.css'; // If you have a CSS file
import TabsContainer from './components/tabs/TabsContainer';
import './components/tabs/Tabs.css';
import UpcomingMatches from './UpcomingMatches'; 
import media1 from './images/lions_cup_logo.png'; // Update the path to your image

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
      <h1 className="tournament-title">Lions Cup</h1> {/* Add the title here */}
      <div className="tabs-container" style={{ marginBottom: '20px' }}> {/* Inline style for margin */}
        <TabsContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      {renderContent()}
      <div className="footer-image">
        <img src={media1} alt="Lions Cup" />
      </div>
    </div>
  );
};

export default App;
