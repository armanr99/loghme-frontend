import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import logo from "../../assets/images/logo.png";
import validateEmail from "../../services/tools/validateEmail";
import { signupUser } from "../../services/redux/actions/userActions";
import { error } from "../../services/toastify/configs";
import mapStateToProps from "../../services/redux/configs/userStateToProps";
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

    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const email = this.state.email;
    const phoneNumber = this.state.phoneNumber;
    const password = this.state.password;

    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      toast.error(error.EMPTY_FIELD);
      return;
    } else if (!validateEmail(email)) {
      toast.error(error.EMAIL);
      return;
    }
    
    this.props.dispatch(signupUser(firstName, lastName, email, phoneNumber, password));
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

export default connect(mapStateToProps)(Signup);
