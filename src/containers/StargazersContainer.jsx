import React from "react";
import { Container } from "reakit";
import countStars from "../utils/countStars";

const initialState = {
  userStars: undefined,
  pairs: [],
  user: "",
  depth: 1,
  peopleCount: 0
};

const actions = {
  setUser: user => () => ({ user }),
  setUserStars: UserStars => () => ({ UserStars }),
  setDepth: depth => () => ({ depth }),
  countPerson: () => state => ({ peopleCount: state.peopleCount + 1 })
};

const effects = {
  start: (user, depth) => async ({ setState }) => {
    const stars = await countStars(user);
    setState(state => ({ userStars: stars }));
  }
};

const StargazersContainer = props => {
  const { initialState: propsInitialState } = props;

  return (
    <Container
      {...props}
      initialState={{ ...initialState, ...propsInitialState }}
      effects={effects}
      actions={actions}
      context="space"
    />
  );
};

export default StargazersContainer;
