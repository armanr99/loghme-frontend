import React from "react";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";
import { error, success } from "../../../../services/toastify/configs";
import { toast } from "react-toastify";
import API from "../../../../services/api";
import { connect } from "react-redux";
import mapStateToProps from "../../../../services/redux/configs/userStateToProps";
import "./styles.css";

class CartItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFood = this.handleAddFood.bind(this);
    this.handleDeleteFood = this.handleDeleteFood.bind(this);
  }

  async handleAddFood() {
    const data = {
      foodName: this.props.cartItem.food.name,
      restaurantId: this.props.cartItem.food.restaurant.id,
    };

    try {
      const response = await API.post("/cart", data);
      const user = response.data;
      this.props.dispatch({ type: "SET_USER", user: user });
      toast.success(success.ADD_TO_CART);
    } catch (err) {
      toast.error(error.INTERNAL);
    }
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
      this.props.dispatch({ type: "SET_USER", user: user });
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
