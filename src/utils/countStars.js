import githubData from "./githubData";
import { reposFrom } from "./queries";

const countStars = async user => {
  const [repos] = await githubData(reposFrom(user));
  return repos.reduce((acc, it) => it.stargazers_count + acc, 0);
};

export default countStars;
