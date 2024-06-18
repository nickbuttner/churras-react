import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../screens/home";
import Login from "../screens/login";
import NoMatch from "../screens/no-match";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
