import React from "react";
import kfc from "../../../../../../../../assets/images/kfc.png"
import "./styles.css";

class RestaurantCart extends React.Component {
  render() {
    return (
      <div className="loghme-card">
        <div className="restaurant-card-img-container">
          <a href="./restaurant.html">
            <img src={kfc} alt="Restaurant Logo" />
          </a>
        </div>
        <div className="restaurant-card-info flex flex-col justify-content-center align-items-center">
          <p>Khames Fried Chicken</p>
          <a href="/menu" className="loghme-button-style">
            نمایش منو
          </a>
        </div>
      </div>
    );
  }
}

export default RestaurantCart;
