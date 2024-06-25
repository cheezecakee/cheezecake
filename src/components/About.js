import React from 'react';

import { ReactComponent as DiscordIcon } from '../images/discord.svg';
import { ReactComponent as TwitchIcon } from '../images/twitch.svg';

const About = () => (
  <section className="about">
    <h2>[About]</h2>
    <p className="about-me">
    I was born in Brazil but grew up all around the world! I've lived in India, the US, and Thailand. I've always been interested in how technology works and have opened up almost every device I've owned to learn how they operate. I started programming a bit later in life but have always had an interest in it. My passion for programming grew when I thought about creating a smart traffic light system. Since then, I've come to love programming as a whole.
    I am particularly fascinated by algorithms and data science. I enjoy solving complex problems and optimizing code to improve performance. My goal is to leverage these skills to create efficient, scalable solutions that can make a positive impact.
</p>

  <h2>[Hobbies]</h2>
  <p className="about-me">
I spend most of my day programming as it is my favorite pastime. I also play competitive video games such as Valorant, Counter-Strike, and Overwatch. Additionally, I enjoy playing chess and Sudoku. I love calisthenics and working out, but I had to take a break due to a shoulder injury. In my leisure time, I enjoy watching documentaries and coding videos.
  </p>

  <h2>[Education]</h2>
  <p className="about-me">
I attended several different high schools due to frequent family relocations. I graduated with a Bachelor's degree in Computer Science and plan to pursue a Master's degree in Artificial Intelligence in the near future.  </p>

  <div className="Skills">
    <h2 className="skills-h2">[Languages]</h2>
    <div className="skills-grid">
      <div className="skill-item">Golang</div>
      <div className="skill-item">Python</div>
      <div className="skill-item">Javascript</div>
      <div className="skill-item">C</div>
    </div>
  </div>

  <div className="Tools">
     <h2 className="skills-h2">[Tools]</h2>
     <div className="skills-grid">
       <div className="skill-item">CSS</div>
       <div className="skill-item">HTML</div>
       <div className="skill-item">TailwindCSS</div>
       <div className="skill-item">React</div>
       <div className="skill-item">Figma</div>
       <div className="skill-item">SQL</div>
       <div className="skill-item">Docker</div>
       <div className="skill-item">Git</div>
       <div className="skill-item">Illustrator</div>
     </div>
   </div>

  <h2>[Socials]</h2>
  <p className="about-me">
  You can contact me via 
  <a href="https://discordapp.com/users/186253794252816384" className="social-link" target="_blank">
    <DiscordIcon className="social-icon" />
    <span>Discord</span>
  </a>, or checkout my 
  <a href="https://twitch.tv/cheezecak3" className="social-link" target="_blank">
    <TwitchIcon className="social-icon" />
    <span>Twitch</span>
  </a> where I sometimes stream.
  </p>
  </section>
);

export default About;
