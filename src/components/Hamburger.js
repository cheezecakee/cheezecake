import React from 'react';
import './Hamburger.css'; // Import the CSS file for styling

const Hamburger = ({ onSelectPage }) => {
  return (
    <div className="hamburger-menu">
      <button onClick={() => onSelectPage('home')} className="menu-item">Home</button>
      <button onClick={() => onSelectPage('about')} className="menu-item">About</button>
      <button onClick={() => onSelectPage('projects')} className="menu-item">Projects</button>
      <button onClick={() => onSelectPage('games')} className="menu-item">Games</button>
      <button onClick={() => onSelectPage('settings')} className="menu-item">Settings</button>
    </div>
  );
};

export default Hamburger;

