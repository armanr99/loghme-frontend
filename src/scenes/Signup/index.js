import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.css";
import { Link } from "react-router-dom";

class Signup extends React.Component {
  render() {
    return (
      <div className="signup-body">
        <div className="auth flex-center flex-col">
          <Link to="/">
            <div className="auth-logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <input
            type="text"
            name="name"
            placeholder="نام و نام خانوادگی"
            className="loghme-input-text"
          />
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
            value="ثبت‌نام"
            className="loghme-button loghme-button-style"
          />
          <p>
            قبلا ثبت‌نام کرده‌اید؟{" "}
            <Link to="/login" className="auth-link login-link">
              ورود
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
