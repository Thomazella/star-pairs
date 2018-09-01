import React from "react";
import { Flex, Paragraph, Button, styled } from "reakit";
import countStars from "../utils/countStars";
import StargazersContainer from "../containers/StargazersContainer";
import githubData from "../utils/githubData";
import { profileOf } from "../utils/queries";

const USER = "diegohaz";
const DEPTH = 25;

const assertStars = async (user, goal) => goal === (await countStars(user));

const avatarOf = async user => {
  const profile = await githubData(profileOf(user));
  return profile.avatar_url;
};

const zeroHelper = n => {
  if (n >= 0 && typeof n === "number") return true;
  return false;
};

const Wrapper = styled(Flex)`
  margin-top: 2em;
  flex-direction: column;
  align-items: center;
`;

const SpaceButton = styled(Button.as("button"))`
  border: 2px solid black;
  font-size: 1.1em;
  max-width: 3em;
`;

const SpaceParagraph = styled(Paragraph)`
  margin-top: 2em;
  font-size: 1.5em;
`;

const Results = props => {
  const { text } = props;

  return (
    <StargazersContainer>
      {({ userStars, start, user, depth }) => (
        <Wrapper>
          <SpaceButton type="button" onClick={() => start(user, depth)}>
            Send
          </SpaceButton>
          {user && (
            <SpaceParagraph>
              Your being is known as
              {` ${user}`}
            </SpaceParagraph>
          )}
          {zeroHelper(userStars) && (
            <SpaceParagraph>
              Your have
              {` ${userStars} `}
              stars!
            </SpaceParagraph>
          )}
          {depth && (
            <SpaceParagraph>
              Searching in a radius of
              {` ${depth} `}
              light years from your current planet
            </SpaceParagraph>
          )}
          <SpaceParagraph>{text}</SpaceParagraph>
        </Wrapper>
      )}
    </StargazersContainer>
  );
};

export default Results;
