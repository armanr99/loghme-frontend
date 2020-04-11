import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.css";

class Signup extends React.Component {
  render() {
    return (
      <div className="signup-body">
        <div className="auth flex-center flex-col">
          <div className="auth-logo">
            <img src={logo} alt="Logo" />
          </div>
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
            <a href="./login.html" className="auth-link login-link">
              ورود
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
