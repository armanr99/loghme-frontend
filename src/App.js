import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Restaurant from "./scenes/Restaurant";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
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
