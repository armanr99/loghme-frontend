import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./scenes/Home";
import Profile from "./scenes/Profile";
import Signup from "./scenes/Signup";
import Login from "./scenes/Login";
import Restaurant from "./scenes/Restaurant";
import API from "./services/api";
import { ToastContainer } from "react-toastify";
import mapStateToProps from "./services/redux/configs/userStateToProps";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  async componentDidMount() {
    const response = await API.get("/user");
    const user = response.data;
    this.props.dispatch({ type: "SET_USER", user: user });
  }

  render() {
    return (
      <Router>
        <div>
          <ToastContainer rtl />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={Profile} />
            <Route path="/restaurants/:id" component={Restaurant} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
