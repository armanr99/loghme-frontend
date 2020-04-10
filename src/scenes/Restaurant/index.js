import React from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./styles.css";

class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Restaurant;