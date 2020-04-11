import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Restaurant from "./scenes/Restaurant";
import Profile from "./scenes/Profile";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/restaurant">
            <Restaurant />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
