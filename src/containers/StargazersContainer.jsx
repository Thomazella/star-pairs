import React from "react";
import { Container } from "reakit";
import countStars from "../utils/countStars";
import githubData from "../utils/githubData";
import { profileOf } from "../utils/queries";

const initialState = {
  stars: 0,
  pairs: []
};

const USER = "diegohaz";
const DEPTH = 25;

const assertStars = async (user, goal) => goal === (await countStars(user));

const avatarOf = async user => {
  const profile = await githubData(profileOf(user));
  return profile.avatar_url;
};

const onMount = async ({ setState }) => {
  // const foo = await findPossiblePairs(USER, 3);
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
