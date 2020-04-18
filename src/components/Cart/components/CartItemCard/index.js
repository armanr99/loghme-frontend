import React from "react";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import API from "../../../../services/api";
import {
  setUser,
  addToCart,
} from "../../../../services/redux/actions/userActions";
import mapStateToProps from "../../../../services/redux/configs/userStateToProps";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";
import { error, success } from "../../../../services/toastify/configs";
import "./styles.css";

class CartItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFood = this.handleAddFood.bind(this);
    this.handleDeleteFood = this.handleDeleteFood.bind(this);
  }

  handleAddFood() {
    const foodInfo = {
      foodName: this.props.cartItem.food.name,
      restaurantId: this.props.cartItem.food.restaurant.id,
    };

    this.props.dispatch(addToCart(foodInfo));
  }

  async handleDeleteFood() {
    const data = {
      foodName: this.props.cartItem.food.name,
      restaurantId: this.props.cartItem.food.restaurant.id,
    };

    try {
      const response = await API.delete("/cart", {
        data: data,
      });
      const user = response.data;
      this.props.dispatch(setUser(user));
      toast.success(success.REMOVE_FROM_CART);
    } catch (err) {
      toast.error(error.INTERNAL);
    }
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
              onClick={this.handleDeleteFood}
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
