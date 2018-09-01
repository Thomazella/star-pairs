import githubData from "./githubData";
import { reposFrom, issuesIn } from "./queries";

const findPossiblePairs = async (user, depth) => {
  const [repos] = await githubData(reposFrom(user));
  const promises = repos
    .slice(0, depth)
    .map(repo => githubData(issuesIn(repo.full_name)));
  const issuesPerRepo = await Promise.all(promises);
  const issues = issuesPerRepo.reduce((acc, it) => {
    const [data] = it;
    return [...acc, ...data];
  }, []);

  return issues.map(issue => issue && issue.user && issue.user.login);
};

export default findPossiblePairs;
