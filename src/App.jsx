import React, { Fragment } from "react";
import Provider from "reakit/Provider";
import Header from "./components/Header";
import UserRegistration from "./components/UserRegistration";
import Results from "./components/Results";

const App = (
  <Provider devtools>
    <Fragment>
      <Header />
      <UserRegistration />
      <Results />
    </Fragment>
  </Provider>
);

export default App;
