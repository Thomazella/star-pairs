import React from "react";
import { Field, Flex, Input, styled } from "reakit";
import StargazersContainer from "../containers/StargazersContainer";

const Wrapper = styled(Flex)``;

const UserRegistration = props => (
  <Wrapper {...props}>
    <StargazersContainer>
      {({ user, depth, setUser, setDepth }) => (
        <Field>
          <Input
            placeholder="your name"
            value={user}
            onChange={e => setUser(e.target.value)}
          />
          <label htmlFor="depthrange">
            {"Distance to search"}
            <Input
              type="range"
              id="depthrange"
              name="depth"
              min="1"
              max="500"
              value={depth}
              onChange={e => setDepth(e.target.value)}
            />
          </label>
        </Field>
      )}
    </StargazersContainer>
  </Wrapper>
);

export default UserRegistration;
