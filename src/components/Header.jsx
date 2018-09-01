import React from "react";
import { Paragraph, styled } from "reakit";

const Component = styled(Paragraph)`
  margin-bottom: 3em;
  font-size: 2em;
  text-align: center;
`;

const Header = props => <Component {...props}> Star Pair </Component>;

export default Header;
