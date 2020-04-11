import React from "react";
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import RestaurantLogo from "./components/RestaurantLogo";
import RestaurantName from "./components/RestaurantName";
import "./styles.css";
import RestaurantInfo from "./components/RestaurantInfo";

class Restaurant extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="restaurant">
          <RestaurantLogo />
          <RestaurantName />
          <RestaurantInfo />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Restaurant;