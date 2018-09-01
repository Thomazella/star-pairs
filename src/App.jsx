import React, { Fragment } from "react";
import { styled, injectGlobal } from "reakit";
import Provider from "reakit/Provider";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    color: #fae1e1;
    min-width: calc(100vw - 8vmin);
    min-height: calc(100vh - 16vmin);
    background-color: #311661;
    padding: 8vmin 4vmin;
  }
`;

const Wrapper = styled("div")``;

const App = (
  <Wrapper>
    <Provider devtools>
      <Fragment>
        <Header />
        <UserInput />
        <Results />
      </Fragment>
    </Provider>
  </Wrapper>
);

export default App;
