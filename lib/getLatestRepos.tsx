import axios from "axios";
import userData from '../constants/data';

const getLatestRepos = async (data: { githubUsername: string }, token?:string) => {
  
  try {
    const username = userData.githubUsername;
    const tokenHeader = token? {Authorization: `token ${process.env.GITHUB_AUTH_TOKEN}` } : {} ;

    const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
        {
          headers: tokenHeader,
        }
      );
      const repos = res.data?.items??[];
      const latest5Repos = repos.splice(0, 5);
      
      return latest5Repos;
  } catch (err) {
    console.log(err);
    return[];
  }
};

export default getLatestRepos;
