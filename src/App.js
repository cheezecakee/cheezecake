// src/App.js
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home.js';
import ThemeSelection from './components/ThemeSelection.js';
import CursorSelection from './components/CursorSelection.js';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Settings from './components/Settings.js';


const App = () => {
  const [theme, setTheme] = useState('light');
  const [cursor, setCursor] = useState(null);
  const [page, setPage] = useState('start');
  const [showNavBar, setShowNavBar] = useState(false);

  const handleCursorSelect = (cursor) => {
    setCursor(cursor);
    setShowNavBar(true);
    setPage('home');
  };

  const handleThemeSelect = (theme) => {
    setTheme(theme);
    setPage('cursor');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className={`app ${theme}`} style={{ cursor: cursor ? `url(${cursor}), auto` : 'auto' }}>
      {page === 'start' && <button onClick={() => setPage('theme')}>Press to Start</button>}
      {page === 'theme' && <ThemeSelection onThemeSelect={handleThemeSelect} />}
      {page === 'cursor' && <CursorSelection onCursorSelect={handleCursorSelect} />}
      {showNavBar && <NavBar onSelectPage={setPage} />}
      {showNavBar && renderPage()}
    </div>
  );
};

export default App;
