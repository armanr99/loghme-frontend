import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.css";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div className="login-body">
        <div className="auth flex-center flex-col">
          <Link to="/">
            <div className="auth-logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            className="loghme-input-text"
          />
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            className="loghme-input-text"
          />
          <input
            type="submit"
            value="ورود"
            className="loghme-button loghme-button-style login-submit"
          />
          <p>
            قبلا ثبت‌نام نکرده‌اید؟{" "}
            <Link to="/signup" className="auth-link">
              ثبت‌نام
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
