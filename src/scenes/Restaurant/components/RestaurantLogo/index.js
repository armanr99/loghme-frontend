import React from "react";
import "./styles.css";

class RestaurantLogo extends React.Component {
  render() {
    return (
      <div className="restaurant-logo-container flex-center">
        <div className="restaurant-logo flex-center">
          <img src={this.props.restaurant.logo} alt="Restaurant Logo" />
        </div>
      </div>
    );
  }
}

export default RestaurantLogo;
