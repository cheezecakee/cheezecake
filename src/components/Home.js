import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="introduction">
        <h1>Hello, I am Anabel</h1>
        <p className="intro-text"> Backend Developer. </p>
        <p className="intro-text"> If you would like to know more about me feel free to browse!</p>
    {/* Add other sections like About, Projects, Contact here */}
      </div>
      <div className="skills">
        <h2> Skills </h2>
        <ul className="tree">
          <li>CSS</li>
          <li>HTML</li>
          <li>Golang</li>
          <li>Python</li>
          <li>C</li>
          <li>Javascript</li>
          <li>SQL</li>
          <li>Docker</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

