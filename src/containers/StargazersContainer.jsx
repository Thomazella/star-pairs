import React from "react";
import { Container } from "reakit";
import countStars from "../utils/countStars";
import githubData from "../utils/githubData";
import { profileOf } from "../utils/queries";

const initialState = {
  userStars: undefined,
  pairs: [],
  user: "",
  depth: 0,
  peopleCount: 0,
  avatar: undefined
};

const avatarOf = async user => {
  const [profile] = await githubData(profileOf(user));
  return profile.avatar_url;
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
    const userAvatar = await avatarOf(user);
    setState(state => ({ userStars: stars, avatar: userAvatar }));
    if (!depth) setState({ depth: 1 });
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
