import React from "react";
import HeaderInfo from "./components/HeaderInfo";
import HeaderImage from "./components/HeaderImage";
import "./styles.css";

class Header extends React.Component {
  render() {
    return (
      <header className="flex-center">
        <div className="header-container">
          <ul>
            <HeaderInfo />
            <HeaderImage />
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
