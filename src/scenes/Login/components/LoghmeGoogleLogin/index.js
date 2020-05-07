import React from "react";
import GoogleLogin from "react-google-login";
import "./styles.css";

const responseGoogle = (response) => {
  console.log(response);
};

class LoghmeGoogleLogin extends React.Component {
  render() {
    return (
      <div className="loghme-google-login">
        <GoogleLogin
          clientId="1055649283438-ehegliqteop5d72c91otdtpbouiiol3i.apps.googleusercontent.com"
          buttonText="ورود با گوگل"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default LoghmeGoogleLogin;
