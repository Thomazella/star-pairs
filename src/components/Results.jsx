import React from "react";
import { Flex, Paragraph, styled } from "reakit";
import countStars from "../utils/countStars";
import githubData from "../utils/githubData";
import { profileOf } from "../utils/queries";

const USER = "diegohaz";
const DEPTH = 25;

const assertStars = async (user, goal) => goal === (await countStars(user));

const avatarOf = async user => {
  const profile = await githubData(profileOf(user));
  return profile.avatar_url;
};

const Wrapper = styled(Flex)`
  margin-top: 2em;
  font-size: 1.5em;
`;

const Results = props => {
  const { text } = props;

  return (
    <Wrapper>
      <Paragraph>{text}</Paragraph>
    </Wrapper>
  );
};

export default Results;
