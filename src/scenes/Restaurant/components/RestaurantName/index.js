import React from "react";
import "./styles.css";

class RestaurantName extends React.Component {
  render() {
    return (
      <div className="restaurant-name flex-center">
        <p>{this.props.restaurant.name}</p>
      </div>
    );
  }
}

export default RestaurantName;
