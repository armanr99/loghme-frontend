import React from "react";
import mcdonalds from "./images/mcdonalds.png";
import "./styles.css";

class RestaurantLogo extends React.Component {
  render() {
    return (
      <div class="restaurant-logo-container flex-center">
        <div class="restaurant-logo flex-center">
          <img src={mcdonalds} alt="Restaurant Logo" />
        </div>
      </div>
    );
  }
}

export default RestaurantLogo;
