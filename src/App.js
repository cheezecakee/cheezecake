import React, { useState, useEffect } from 'react';
import './App.css';
import './AppMobile.css';
import Home from './components/Home.js';
import CursorSelection from './components/CursorSelection.js';
import NavBar from './components/NavBar.js';
import Hamburger from './components/Hamburger.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Games from './components/Games.js';
import Settings from './components/Settings.js';

import { ReactComponent as SunIcon } from './images/sun.svg';
import { ReactComponent as MoonIcon } from './images/moon.svg';
import { ReactComponent as MenuIcon } from './images/menu.svg';
import { ReactComponent as CloseIcon } from './images/close.svg';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [cursor, setCursor] = useState(null);
  const [page, setPage] = useState('start');
  const [showNavBar, setShowNavBar] = useState(false);
  const [showHamburger, setHamburger] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setPage('home'); // On mobile, set page to 'home'
      setShowNavBar(false);
    } else {
      setHamburger(false);
      if (page === 'home') {
        setShowNavBar(true);
      }
    }
  }, [isMobile]);
  
  const handleCursorSelect = (cursor) => {
    setCursor(cursor);
    setShowNavBar(true);
    setPage('home');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenu = () => {
    setHamburger((prev) => !prev); // Toggle the hamburger menu
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
      {!isMobile ? (
        <>
          {page === 'start' && <button onClick={() => setPage('cursor')}>Press to Start</button>}
          {page === 'cursor' && <CursorSelection onCursorSelect={handleCursorSelect} />}
          {showNavBar && <NavBar onSelectPage={setPage} />}
          {showNavBar && renderPage()}
        </>
      ) : (
        <>   
          <button className="hamburger-button" onClick={toggleMenu}>
            {showHamburger ? <CloseIcon className="hamburger-icon" /> : <MenuIcon className="hamburger-icon" />}
          </button>

          {showHamburger && <Hamburger onSelectPage={setPage} />}

          {renderPage()}
        </>
      )}
      <button className="dark-mode-toggle" onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon className="dark-mode-icon" /> : <SunIcon className="dark-mode-icon" />}
      </button>
    </div>
  );
};

export default App;

