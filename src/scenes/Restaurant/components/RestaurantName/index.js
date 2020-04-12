import React from "react";
import PropTypes from "prop-types";
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

RestaurantName.propTypes = {
  restaurant: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
};
