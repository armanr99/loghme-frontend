import React from "react";
import { toast } from "react-toastify";
import {withRouter} from 'react-router-dom'
import { GoogleLogin } from "react-google-login";
import API from "../../../../services/api";
import { error } from "../../../../services/toastify/configs";
import "./styles.css";

class LoghmeGoogleLogin extends React.Component {
  responseGoogleSuccess = async (response) => {
    if (response.getAuthResponse) {
      const googleToken = await response.getAuthResponse().id_token;
  
      try {
        const response = await API.post("/login/google", { token: googleToken });
        const token = response.data.token;
        localStorage.setItem("token", token);
        window.location.href = "/";
      } catch (err) {
        if (err.response && err.response.status === 403) {
          toast.error(error.UNREGISTERED_EMAIL);
          this.props.history.push("/signup");
        } else {
          toast.error(error.INTERNAL);
        }
      }
    }
  };

  responseGoogleError = async () => {
    console.log("Google Error");
  };

  render() {
    return (
      <div className="loghme-google-login">
        <GoogleLogin
          clientId="1055649283438-ehegliqteop5d72c91otdtpbouiiol3i.apps.googleusercontent.com"
          buttonText="ورود با گوگل"
          onSuccess={this.responseGoogleSuccess}
          onFailure={this.responseGoogleError}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default withRouter(LoghmeGoogleLogin);
