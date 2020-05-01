import React from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./scenes/Home";
import Profile from "./scenes/Profile";
import Signup from "./scenes/Signup";
import Login from "./scenes/Login";
import Restaurant from "./scenes/Restaurant";
import DecisionRoute from "./components/DecisionRoute";
import mapStateToProps from "./services/redux/configs/authenticatedToProps";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  render() {
    const isAuthenticated = localStorage.getItem("token") !== null;
    return (
      <Router>
        <div>
          <ToastContainer rtl />
          <Switch>
            <DecisionRoute
              condition={!isAuthenticated}
              path="/login"
              trueComponent={Login}
              falseComponent={Home}
            />
            <DecisionRoute
              condition={!isAuthenticated}
              path="/signup"
              trueComponent={Signup}
              falseComponent={Home}
            />
            <DecisionRoute
              condition={isAuthenticated}
              path="/profile"
              trueComponent={Profile}
              falseComponent={Login}
            />
            <DecisionRoute
              condition={isAuthenticated}
              path="/restaurants/:id"
              trueComponent={Restaurant}
              falseComponent={Login}
            />
            <DecisionRoute
              condition={isAuthenticated}
              path="/"
              trueComponent={Home}
              falseComponent={Login}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
