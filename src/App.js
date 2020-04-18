import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./scenes/Home";
import Profile from "./scenes/Profile";
import Signup from "./scenes/Signup";
import Login from "./scenes/Login";
import Restaurant from "./scenes/Restaurant";
import { setUser } from "./services/redux/actions/userActions";
import { ToastContainer } from "react-toastify";
import mapStateToProps from "./services/redux/configs/userStateToProps";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  async componentDidMount() {
    this.props.dispatch(setUser());
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
