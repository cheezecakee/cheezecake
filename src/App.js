import React, { useState } from 'react';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div className="App">
      {started ? (
        <>
          <About />
          <Projects />
          <Contact />
        </>
      ) : (
        <Home onStart={handleStart} />
      )}
    </div>
  );
}

export default App;
