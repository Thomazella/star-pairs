import React, { Fragment } from "react";
import { Flex, Paragraph, Button, styled, Image } from "reakit";
import countStars from "../utils/countStars";
import StargazersContainer from "../containers/StargazersContainer";

const assertStars = async (user, goal) => goal === (await countStars(user));

const zeroIsOk = n => {
  if (n >= 0 && typeof n === "number") return true;
  return false;
};

const Wrapper = styled(Flex)`
  margin-top: 2em;
  flex-direction: column;
  align-items: center;
`;

const SpaceButton = styled(Button.as("button"))`
  border: 2px solid #fad7c8;
  font-size: 1.1em;
  max-width: 3em;
`;

const SpaceParagraph = styled(Paragraph)`
  margin-top: 2em;
  font-size: 1.5em;
`;

const SpaceImage = styled(Image)`
  margin-top: 2em;
  max-width: 33vmin;
`;

const Results = props => {
  const { text } = props;

  return (
    <StargazersContainer>
      {({ userStars, start, user, depth, avatar }) => (
        <Wrapper>
          <SpaceButton type="button" onClick={() => start(user, depth)}>
            Send
          </SpaceButton>
          {Boolean(user) && (
            <SpaceParagraph>
              Your being is known as
              {` ${user}`}
            </SpaceParagraph>
          )}
          {Boolean(avatar) && (
            <Fragment>
              <SpaceParagraph>Your current physical appearance</SpaceParagraph>
              <SpaceImage src={avatar} alt={`${user}'s github profile pic`} />
            </Fragment>
          )}
          {zeroIsOk(userStars) && (
            <SpaceParagraph>
              You have
              {` ${userStars} `}
              stars!
            </SpaceParagraph>
          )}
          {Boolean(depth) && (
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
