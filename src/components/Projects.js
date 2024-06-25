import React, { useState, useEffect } from 'react';
import { getRepoData } from '../dataLoader';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data = getRepoData();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="repo-list">
        {repos.map(repo => (
          <div key={repo.id} className="repo-box">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="repo-footer">
              <div className="languages">
                {Object.keys(repo.languages).map(lang => (
                  <span key={lang}>{lang}</span>
                ))}
              </div>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">[GitHub]</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

