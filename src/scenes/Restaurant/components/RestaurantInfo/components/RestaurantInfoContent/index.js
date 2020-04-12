import React from "react";
import "./styles.css";
import Cart from "../../../../../../components/Cart";
import Menu from "./components/Menu";
import PropTypes from "prop-types";

class RestaurantInfoContent extends React.Component {
  render() {
    return (
      <div className="container restaurant-bottom">
        <div className="row flex-row-reverse">
          <div className="col-lg-8 col-md-6 restaurant-menu">
            <Menu restaurant={this.props.restaurant} />
          </div>
          <div className=" col-lg-4 col-md-6 restaurant-cart-container">
            <Cart inRestaurant={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantInfoContent;

RestaurantInfoContent.propTypes = {
  restaurant: PropTypes.object.isRequired,
};
