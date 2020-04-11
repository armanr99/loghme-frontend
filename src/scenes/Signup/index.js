import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.css";

class Signup extends React.Component {
  render() {
    return (
      <div class="signup-body">
        <div class="auth flex-center flex-col">
          <div class="auth-logo">
            <img src={logo} alt="Logo" />
          </div>
          <input
            type="text"
            name="name"
            placeholder="نام و نام خانوادگی"
            class="loghme-input-text"
          />
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            class="loghme-input-text"
          />
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            class="loghme-input-text"
          />
          <input
            type="submit"
            value="ثبت‌نام"
            class="loghme-button loghme-button-style"
          />
          <p>
            قبلا ثبت‌نام کرده‌اید؟{" "}
            <a href="./login.html" class="auth-link login-link">
              ورود
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Signup;
