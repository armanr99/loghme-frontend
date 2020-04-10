import React from "react";
import cover from "./images/cover.jpg";
import "./styles.css";

class HomeIntroCover extends React.Component {
  render() {
    return <img src={cover} alt="Intro Cover" className="home-intro-cover" />;
  }
}

export default HomeIntroCover;
