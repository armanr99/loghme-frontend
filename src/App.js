import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/Home";
import Restaurant from "./scenes/Restaurant";
import Profile from "./scenes/Profile";
import Signup from "./scenes/Signup";
import Login from "./scenes/Login";
import API from "./services/api";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 0,
        credit: 0,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        orders: [],
        cart: { items: [], totalPrice: 0 },
      },
    };

    this.updateUser = this.updateUser.bind(this);
  }

  async componentDidMount() {
    const response = await API.get("/user");
    const user = response.data;
    this.updateUser(user);
  }

  updateUser(user) {
    this.setState({ user });
  }

  render() {
    return (
      <Router>
        <div>
          <ToastContainer rtl/>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/profile"
              render={(props) => (
                <Profile
                  {...props}
                  user={this.state.user}
                  updateUser={this.updateUser}
                />
              )}
            />
            <Route
              path="/restaurants/:id"
              render={(props) => (
                <Restaurant
                  {...props}
                  user={this.state.user}
                  updateUser={this.updateUser}
                />
              )}
            />
            <Route
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  user={this.state.user}
                  updateUser={this.updateUser}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
