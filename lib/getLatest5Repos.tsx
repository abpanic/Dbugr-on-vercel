import axios from "axios";
import userData from "../constants/data";

const getLatest5Repos = async (data, token) => {
  try {
    const username = userData.githubUsername;

    // Use the provided token, or fallback to the environment variable
    token = token ?? process.env.GITHUB_AUTH_TOKEN;

    const headers = token ? { Authorization: `token ${token}` } : {};

    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      { headers }
    );

    const repos = res.data.items ?? [];
    const latest5Repos = repos.slice(0, 5);

    return latest5Repos;
  } catch (err) {
    console.log(err);
    return [];
  }
};

export default getLatest5Repos;
