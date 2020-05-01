import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import API from "../../services/api";
import validateEmail from "../../services/tools/validateEmail";
import { error } from "../../services/toastify/configs";
import "./styles.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
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
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const phoneNumber = data.phoneNumber;
    const password = data.password;

    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      toast.error(error.EMPTY_FIELD);
      return;
    } else if (!validateEmail(email)) {
      toast.error(error.EMAIL);
      return;
    }

    const response = await API.post("/signup", data);
    const token = response.data.token;

    localStorage.setItem("token", token);
    window.location.href = "/";
  }

  render() {
    return (
      <div className="signup-body">
        <form
          className="auth flex-center flex-col"
          onSubmit={this.handleSubmit}
        >
          <Link to="/">
            <div className="auth-logo">
              <img src={logo} alt="Logo" />
            </div>
          </Link>
          <input
            type="text"
            name="firstName"
            placeholder="نام"
            className="loghme-input-text"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="نام خانوادگی"
            className="loghme-input-text"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            className="loghme-input-text ltr"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="شماره همراه"
            className="loghme-input-text ltr"
            value={this.state.phoneNumber}
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
            className="loghme-button loghme-button-style"
            onClick={this.handleSubmit}
          >
            ثبت‌نام
          </button>
          <p>
            قبلا ثبت‌نام کرده‌اید؟{" "}
            <Link to="/login" className="auth-link login-link">
              ورود
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Signup;
