/* eslint-disable quotes */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header />
        App Placeholder
        <Switch>
          <Route exact path="/" />
          <Route exact path="/search" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
