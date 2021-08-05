/* eslint-disable quotes */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        App Placeholder
        <Route exact path="/" />
        <Route exact path="/search" />
      </div>
    </Router>
  );
}

export default App;
