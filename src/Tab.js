// Tab.js
import React from 'react';
import './Tabs.css';

const Tab = ({ onClick, tabLabel, isActive }) => {
  return (
    <button
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => onClick(tabLabel)}
    >
      {tabLabel}
    </button>
  );
};

export default Tab;
