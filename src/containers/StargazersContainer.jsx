import React from "react";
import { Container } from "reakit";
import "whatwg-fetch";
import { flatten } from "lodash";

const initialState = {
  stars: 0,
  pairs: []
};

const USER = "diegohaz";
const DEPTH = 25;

const githubData = async query => {
  let data;
  let err;

  try {
    const result = await fetch(`https://api.github.com/${query}`);
    const json = await result.json();
    data = json;
  } catch (error) {
    err = error;
  }

  return [data, err];
};

const reposFrom = user => `users/${user}/repos`;
const issuesIn = repoFullName => `repos/${repoFullName}/issues?state=all`;

const countStars = async user => {
  const [repos] = await githubData(reposFrom(user));
  return repos.reduce((acc, it) => it.stargazers_count + acc, 0);
};

const assertStars = async (user, goal) => goal === (await countStars(user));

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

const onMount = async ({ setState }) => {
  try {
    // const stars = countStars(USER);
    const foo = await findPossiblePairs(USER, 3);

    // setState({ stars });
  } catch (e) {
    setState({ error: e });
  }
};

const StargazersContainer = props => {
  const { initialState: propsInitialState } = props;

  return (
    <Container
      {...props}
      initialState={{ ...initialState, ...propsInitialState }}
      onMount={onMount}
    />
  );
};

export default StargazersContainer;
