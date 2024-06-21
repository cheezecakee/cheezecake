import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = 'cheezecakee'; // Replace with your GitHub username
  const token = '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'; // Replace with your GitHub personal access token

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
          Authorization: `token ${token}`
        }
      });
      const data = await response.json();

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
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="repo-link">[View]</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
