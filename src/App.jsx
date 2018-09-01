import React, { Fragment } from "react";
import Provider from "reakit/Provider";
import StargazersContainer from "./containers/StargazersContainer";
import Header from "./components/Header";
import UserRegistration from "./components/UserRegistration";

const App = (
  <Provider devtools>
    <StargazersContainer>
      {() => (
        <Fragment>
          <Header />
          <UserRegistration />
        </Fragment>
      )}
    </StargazersContainer>
  </Provider>
);

export default App;
