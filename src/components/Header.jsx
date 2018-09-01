import React from "react";
import { Paragraph, styled } from "reakit";

const Component = styled(Paragraph)`
  margin-bottom: 4em;
  font-size: 3em;
  text-align: center;
`;

const Header = props => <Component {...props}> Star ★ Pair </Component>;

export default Header;
