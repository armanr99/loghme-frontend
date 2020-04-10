import React from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./styles.css";
import RestaurantLogo from "./components/RestaurantLogo";

class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main class="restaurant">
          <RestaurantLogo />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Restaurant;