// TabsContainer.js
import React from 'react';
import Tab from './Tab.js';

const TabsContainer = ({ activeTab, setActiveTab }) => {
  const tabLabels = [
    'Men\'s Singles', 
    'Men\'s Doubles', 
    'Women\'s Singles', 
    'Women\'s Doubles', 
    'Mixed Doubles',
    'Upcoming Matches'
  ];

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        {tabLabels.map(tabLabel => (
          <Tab
            key={tabLabel}
            tabLabel={tabLabel}
            isActive={tabLabel === activeTab}
            onClick={() => changeTab(tabLabel)}
          />
        ))}
      </div>
    </div>
  );
};

export default TabsContainer;
