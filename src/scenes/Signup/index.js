import React from "react";
import logo from "../../assets/images/logo.png";
import "./styles.css";
import { Link } from "react-router-dom";
import validateEmail from "../../services/tools/validateEmail";
import { error } from "../../services/toastify/configs";
import { toast } from "react-toastify";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    const email = this.state.email;
    const password = this.state.password;

    if (!validateEmail(email)) {
      toast.error(error.EMAIL);
      return;
    } else if (!email || !password) {
      toast.error(error.EMPTY_FIELD);
      return;
    }
  }

  render() {
    return (
      <div className="signup-body">
        <form className="auth flex-center flex-col" onSubmit={this.handleSubmit}>
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
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="ایمیل"
            className="loghme-input-text"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            className="loghme-input-text"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <button
            className="loghme-button loghme-button-style"
            onClick={this.handleSubmit}
          >
            ورود
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
