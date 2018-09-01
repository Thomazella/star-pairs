import React from "react";
import { Container } from "reakit";

const initialState = {
  userStars: undefined,
  pairs: [],
  user: "",
  depth: 3,
  peopleCount: 0
};

const effects = {};

const actions = {
  setUser: user => () => ({ user }),
  setUserStars: UserStars => () => ({ UserStars }),
  setDepth: depth => () => ({ depth }),
  countPerson: () => state => ({ peopleCount: state.peopleCount + 1 })
};

const StargazersContainer = props => {
  const { initialState: propsInitialState } = props;

  return (
    <Container
      {...props}
      initialState={{ ...initialState, ...propsInitialState }}
      effect={effects}
      actions={actions}
      context="space"
    />
  );
};

export default StargazersContainer;
