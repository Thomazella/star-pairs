import React from "react";
import { Field, Flex, Input, styled } from "reakit";
import StateContainer from "../containers/StateContainer";

const initialState = {
  number: 1,
  text: ""
};

const Wrapper = styled(Flex)``;

const UserRegistration = props => (
  <Wrapper {...props}>
    <StateContainer initialState={initialState}>
      {({ number, text, set }) => (
        <Field>
          <Input
            placeholder="your name"
            value={text}
            onChange={e => set({ text: e.target.value })}
          />
          <Input
            type="range"
            name="depth"
            min="1"
            max="500"
            value={number}
            onChange={e => set({ number: e.target.value })}
          />
        </Field>
      )}
    </StateContainer>
  </Wrapper>
);

export default UserRegistration;
