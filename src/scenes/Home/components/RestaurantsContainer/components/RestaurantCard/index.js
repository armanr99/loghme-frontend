import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class RestaurantCart extends React.Component {
  render() {
    return (
      <div className="loghme-card">
        <div className="restaurant-card-img-container">
          <Link to={`/restaurants/${this.props.restaurant.id}`}>
            <img src={this.props.restaurant.logo} alt="Restaurant Logo" />
          </Link>
        </div>
        <div className="restaurant-card-info flex flex-col justify-content-center align-items-center">
          <p>{this.props.restaurant.name}</p>
          <Link
            to={`/restaurants/${this.props.restaurant.id}`}
            className="loghme-button-style"
          >
            نمایش منو
          </Link>
        </div>
      </div>
    );
  }
}

export default RestaurantCart;
