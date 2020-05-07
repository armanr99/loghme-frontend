import React from "react";
import { Link } from "react-router-dom";
import { error } from "../../services/toastify/configs";
import { toast } from "react-toastify";
import LoghmeGoogleLogin from "./components/LoghmeGoogleLogin";
import logo from "../../assets/images/logo.png";
import API from "../../services/api";
import validateEmail from "../../services/tools/validateEmail";
import "./styles.css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const data = this.state;
    const email = data.email;
    const password = data.password;

    if (!email || !password) {
      toast.error(error.EMPTY_FIELD);
      return;
    } else if (!validateEmail(email)) {
      toast.error(error.EMAIL);
      return;
    }

    try {
      const response = await API.post("/login", data);
      const token = response.data.token;
      localStorage.setItem("token", token);
      window.location.href = "/";
    } catch (err) {
      if (err.response && err.response.status === 403) {
        toast.error(error.WRONG_LOGIN);
      } else {
        toast.error(error.INTERNAL);
      }
    }
  }

  render() {
    return (
      <div className="login-body">
        <form
          className="auth flex-center flex-col"
          onSubmit={this.handleSubmit}
        >
          <Link to="/">
            <div className="auth-logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <LoghmeGoogleLogin />
          <div className="login-or flex-center">
            <p>یا</p>
          </div>
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            className="loghme-input-text ltr"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            className="loghme-input-text ltr"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button
            className="loghme-button loghme-button-style login-submit"
            onClick={this.handleSubmit}
          >
            ورود
          </button>
          <p>
            قبلا ثبت‌نام نکرده‌اید؟{" "}
            <Link to="/signup" className="auth-link">
              ثبت‌نام
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
