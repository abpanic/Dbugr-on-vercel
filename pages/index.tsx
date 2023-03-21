import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatest5Repos from "../lib/getLatest5Repos";
import userData from "../constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Abhilash Panicker - Data Enthusiast, Developer, Debuger"
      description="This is a repository of blogs, tutorials and collection of some of my work.">
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  
  const token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatest5Repos(userData.githubUsername, token);
  

  return {
    props: {
      repositories,
    },
  };
};
