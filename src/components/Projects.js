import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = 'cheezecakee'; 
  const token = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
          headers: {
            Authorization: `token ${token}`
          }
        });

        const data = await response.json();
        console.log('Data:', data); // Check fetched data

        const reposWithLanguages = await Promise.all(data.map(async repo => {
          const langResponse = await fetch(repo.languages_url, {
            headers: {
              Authorization: `token ${token}`
            }
          });
          const languages = await langResponse.json();
          return { ...repo, languages };
        }));

        setRepos(reposWithLanguages);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, [username, token]);

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
