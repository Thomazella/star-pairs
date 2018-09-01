import React from "react";
import Provider from "reakit/Provider";
import StargazersContainer from "./containers/StargazersContainer";

const App = (
  <Provider devtools>
    <StargazersContainer>{() => <p>Testing fetch</p>}</StargazersContainer>
  </Provider>
);

export default App;
