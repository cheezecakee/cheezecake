// src/App.js
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home.js';
import ThemeSelection from './components/ThemeSelection.js';
import CursorSelection from './components/CursorSelection.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';


const App = () => {
  const [theme, setTheme] = useState('light');
  const [cursor, setCursor] = useState(null);
  const [page, setPage] = useState('start');

  const handleCursorSelect = (cursor) => {
    setCursor(cursor);
    setPage('home');
  };

  const handleThemeSelect = (theme) => {
    setTheme(theme);
    setPage('cursor');
  };

  return (
    <div className={`app ${theme}`} style={{ cursor: cursor ? `url(${cursor}), auto` : 'auto' }}>
      {page === 'start' && <button onClick={() => setPage('theme')}>Press to Start</button>}
      {page === 'theme' && <ThemeSelection onThemeSelect={handleThemeSelect} />}
      {page === 'cursor' && <CursorSelection onCursorSelect={handleCursorSelect} />}
      {page === 'home' && <Home />}
    </div>
  );
};

export default App;
