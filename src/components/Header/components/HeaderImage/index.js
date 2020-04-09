import React from "react";
import logo from "../../../../assets/images/logo.png";
import "./styles.css";

class HeaderImage extends React.Component {
  render() {
    return (
      <li className="flex-center">
        <a href="./home.html" className="flex-center">
          <img src={logo} alt="Logo" className="header-logo" />
        </a>
      </li>
    );
  }
}

export default HeaderImage;
