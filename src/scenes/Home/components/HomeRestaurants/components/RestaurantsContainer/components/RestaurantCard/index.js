import React from "react";
import "./styles.css";

class RestaurantCart extends React.Component {
  render() {
    return (
      <div class="loghme-card">
        <div class="restaurant-card-img-container">
          <a href="./restaurant.html">
            <img src="../assets/images/KFC.png" alt="Restaurant Logo" />
          </a>
        </div>
        <div class="restaurant-card-info flex flex-col justify-content-center align-items-center">
          <p>Khames Fried Chicken</p>
          <a href="/menu" class="loghme-button-style">
            نمایش منو
          </a>
        </div>
      </div>
    );
  }
}

export default RestaurantCart;
