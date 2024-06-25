import React from 'react';
import resumePDF from "../misc/resume.pdf";

const Home = () => {
  return (
    <div className="home">
      <div className="introduction">
        <h1 className="typing-animation">Hello, I am Anabel</h1>
        <p className="intro-text"> Backend Developer. </p>
        <p className="intro-text"> If you would like to know more about me feel free to browse!</p>
        <div className="links">
          <a href={resumePDF} className="social-link" target="_blank" rel="noopener noreferrer">[CV]</a>
          <a href="https://github.com/cheezecakee" className="social-link" target="_blank" rel="noopener noreferrer">[Github]</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

