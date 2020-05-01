import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { error } from "../../services/toastify/configs";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.png";
import validateEmail from "../../services/tools/validateEmail";
import { loginUser } from "../../services/redux/actions/userActions";
import mapStateToProps from "../../services/redux/configs/redirectStateToProps";
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

    const email = this.state.email;
    const password = this.state.password;

    if (!email || !password) {
      toast.error(error.EMPTY_FIELD);
      return;
    } else if (!validateEmail(email)) {
      toast.error(error.EMAIL);
      return;
    }

    await this.props.dispatch(loginUser(email, password));
    if (this.props.redirect) {
      this.props.history.push("/");
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

export default connect(mapStateToProps)(Login);
