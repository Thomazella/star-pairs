import React, { Fragment } from "react";
import Provider from "reakit/Provider";
import StargazersContainer from "./containers/StargazersContainer";
import Header from "./components/Header";
import UserRegistration from "./components/UserRegistration";
import Results from "./components/Results";

const App = (
  <Provider devtools>
    <StargazersContainer>
      {() => (
        <Fragment>
          <Header />
          <UserRegistration />
          <Results text="asdfs" />
        </Fragment>
      )}
    </StargazersContainer>
  </Provider>
);

export default App;
