import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="introduction">
        <h1 className="typing-animation">Hello, I am Anabel</h1>
        <p className="intro-text"> Backend Developer. </p>
        <p className="intro-text"> If you would like to know more about me feel free to browse!</p>
        <a href="../misc/resume.pdf" className="resume-button" target="_blank" rel="noopener noreferrer">Resume</a>
    {/* Add other sections like About, Projects, Contact here */}
      </div>
      <div className="Skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">CSS</div>
          <div className="skill-item">HTML</div>
          <div className="skill-item">Golang</div>
          <div className="skill-item">Python</div>
          <div className="skill-item">C</div>
          <div className="skill-item">SQL</div>
          <div className="skill-item">Docker</div>
          <div className="skill-item">Git</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

