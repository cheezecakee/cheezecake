import React from 'react';
import './NavBar.css';

import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as AboutIcon } from '../images/about.svg';
import { ReactComponent as ProjectsIcon } from '../images/projects.svg';
import { ReactComponent as GamesIcon } from '../images/games.svg';
import { ReactComponent as SettingsIcon } from '../images/settings.svg';

const NavBar = ({ onSelectPage }) =>{
  return (
   <div className="nav-bar">
      <button onClick={() => onSelectPage('home')} data-text="Home">
        <HomeIcon className="nav-icon" />
      </button>
      <button onClick={() => onSelectPage('about')} data-text="About">
        <AboutIcon className="nav-icon" />
      </button>
      <button onClick={() => onSelectPage('projects')} data-text="Projects">
        <ProjectsIcon className="nav-icon" />
      </button>
      <button onClick={() => onSelectPage('games')} data-text="Games">
        <GamesIcon className="nav-icon" />
      </button>
      <button onClick={() => onSelectPage('settings')} data-text="Settings">
        <SettingsIcon className="nav-icon" />
      </button>
    </div>
  );
};

export default NavBar;

