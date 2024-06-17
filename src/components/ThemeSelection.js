import React from 'react';

const ThemeSelection = ({ onThemeSelect }) => {
  return (
   <div className="theme-selection">
      <h2>Select a Theme</h2>
      <div className="buttons-container">
        <button onClick={() => onThemeSelect('light')}>Light Theme</button>
        <button onClick={() => onThemeSelect('dark')}>Dark Theme</button>
      </div>
   </div>
  );
};

export default ThemeSelection;


