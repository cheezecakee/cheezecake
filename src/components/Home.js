import React from 'react';

const Home = ({ onStart }) => (
  <div className="home">
    <h1>Welcome to My Portfolio</h1>
    <button onClick={onStart}>Press to Start</button>
  </div>
);

export default Home;

