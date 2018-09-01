import React from "react";
import { Container } from "reakit";
import countStars from "../utils/countStars";
import githubData from "../utils/githubData";
import findPossiblePairs from "../utils/findPossiblePairs";
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

const assertStars = async (user, goal) => goal === (await countStars(user));

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
    const candidates = await findPossiblePairs(user, depth);
    const promises = candidates.map(candidate =>
      countStars(candidate).then(theirStars => {
        setState(state => ({ peopleCount: state.peopleCount + 1 }));
        return { name: candidate, theirStars };
      })
    );
    const candidateStars = await promises;
    console.log(candidates);

    setState(() => ({ userStars: stars, avatar: userAvatar }));
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
