import React, { useState, useEffect } from 'react';
import { Octokit } from '@octokit/core';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const username = 'cheezecakee';
  const token = process.env.REACT_APP_REPO;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const octokit = new Octokit({ auth: token });

        // Fetch user repositories
        const { data: repoData } = await octokit.request('GET /users/{username}/repos', {
          username
        });

        // Fetch languages for each repository
        const reposWithLanguages = await Promise.all(repoData.map(async (repo) => {
          const { data: languages } = await octokit.request(repo.languages_url, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
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

