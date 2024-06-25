import repoData from './repo-data.json';

export const getRepoData = () => {
  if (!repoData || typeof repoData !== 'object') {
    throw new Error('Error loading repository data: Invalid JSON structure');
  }
  return repoData;
};

