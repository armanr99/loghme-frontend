import React from "react";
import logo from "../../assets/images/logo.png"
import "./styles.css";

class Login extends React.Component {
  render() {
    return (
      <div className="login-body">
        <div className="auth flex-center flex-col">
          <div className="auth-logo">
            <img src={logo} alt="Logo" />
          </div>
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
            <a href="./signup.html" className="auth-link">
              ثبت‌نام
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
