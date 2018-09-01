import React from "react";
import { Container } from "reakit";
import "whatwg-fetch";

const initialState = {
  stars: 0,
  pairs: []
};

const USER = "diegohaz";
const DEPTH = 25;

const countStars = repos =>
  repos.reduce((acc, it) => it.stargazers_count + acc, 0);

const findPairs = repos =>
  repos.reduce((acc, it) => it.stargazers_count + acc, 0);

const onMount = async ({ setState }) => {
  try {
    const result = await fetch(`https://api.github.com/users/${USER}/repos`);
    const repos = await result.json();
    setState({ stars: countStars(repos) });
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
