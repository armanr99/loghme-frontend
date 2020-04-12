import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import "./styles.css";

class HeaderImage extends React.Component {
  render() {
    return (
      <li className="flex-center">
        <Link to="/" className="flex-center">
          <img src={logo} alt="Logo" className="header-logo" />
        </Link>
      </li>
    );
  }
}

export default HeaderImage;
