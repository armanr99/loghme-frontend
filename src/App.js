import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Restaurant from "./scenes/Restaurant";
import Profile from "./scenes/Profile";
import Signup from "./scenes/Signup";
import Login from "./scenes/Login";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
          <Route path="/restaurants/:id" component={Restaurant} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
