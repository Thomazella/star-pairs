import React from "react";
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

const Results = props => ()

export default Results;