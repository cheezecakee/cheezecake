import React, { useState } from 'react';
import './App.css';
import Home from './components/Home.js';
import CursorSelection from './components/CursorSelection.js';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Games from './components/Games.js';
import Settings from './components/Settings.js';

import { ReactComponent as SunIcon } from './images/sun.svg';
import { ReactComponent as MoonIcon } from './images/moon.svg';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [cursor, setCursor] = useState(null);
  const [page, setPage] = useState('start');
  const [showNavBar, setShowNavBar] = useState(false);

  const handleCursorSelect = (cursor) => {
    setCursor(cursor);
    setShowNavBar(true);
    setPage('home');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'games':
        return <Games />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`app ${theme}`} style={{ cursor: cursor ? `url(${cursor}), auto` : 'inherit' }}>
      {page === 'start' && <button onClick={() => setPage('cursor')}>Press to Start</button>}
      {page === 'cursor' && <CursorSelection onCursorSelect={handleCursorSelect} />}
      {showNavBar && <NavBar onSelectPage={setPage} />}
      {showNavBar && renderPage()}
      <button className="dark-mode-toggle" onClick={toggleTheme}>
        {theme === 'light' ? <MoonIcon className="dark-mode-icon" /> : <SunIcon className="dark-mode-icon" />}
      </button>
    </div>
  );
};

export default App;

