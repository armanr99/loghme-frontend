import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addToCart,
  removeFromCart,
} from "../../../../services/redux/actions/userActions";
import mapStateToProps from "../../../../services/redux/configs/userStateToProps";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";
import "./styles.css";

class CartItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFood = this.handleAddFood.bind(this);
    this.handleRemoveFood = this.handleRemoveFood.bind(this);
  }

  handleAddFood() {
    const foodInfo = {
      foodName: this.props.cartItem.food.name,
      restaurantId: this.props.cartItem.food.restaurant.id,
    };

    this.props.dispatch(addToCart(foodInfo));
  }

  async handleRemoveFood() {
    const foodInfo = {
      foodName: this.props.cartItem.food.name,
      restaurantId: this.props.cartItem.food.restaurant.id,
    };

    this.props.dispatch(removeFromCart(foodInfo));
  }

  render() {
    return (
      <div className="cart-item flex justify-content-around align-items-center">
        <div className="cart-item-name">
          <span>{this.props.cartItem.food.name}</span>
        </div>
        <div className="cart-item-info flex flex-col justify-content-center align-items-center">
          <div className="cart-item-count flex justify-content-around align-items-center">
            <i
              className="glyph-icon flaticon-plus"
              onClick={this.handleAddFood}
            ></i>
            <span>{convertToPersianDigits(this.props.cartItem.count)}</span>
            <i
              className="glyph-icon flaticon-minus"
              onClick={this.handleRemoveFood}
            ></i>
          </div>
          <div className="cart-item-price">
            <span>
              {convertToPersianDigits(
                this.props.cartItem.count * this.props.cartItem.food.price
              )}{" "}
              تومان
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CartItemCard);

CartItemCard.propTypes = {
  cartItem: PropTypes.shape({
    food: PropTypes.shape({
      name: PropTypes.isRequired,
      price: PropTypes.number.isRequired,
      restaurant: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};
