import React from "react";
import { Field, Flex, Input, styled } from "reakit";

const Wrapper = styled(Flex)``;

const UserRegistration = props => (
  <Wrapper {...props}>
    <Field>
      <Input placeholder="your name" />
      <Input placeholder="depth" />
    </Field>
  </Wrapper>
);

export default UserRegistration;
