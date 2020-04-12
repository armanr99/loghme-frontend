import React from "react";
import convertToPersianDigits from "../../services/tools/convertToPersianDigits";
import getInCartCount from "./services/getInCartCount";
import API from "../../services/api";
import { error, success } from "../../services/toastify/configs";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import mapStateToProps from "../../services/redux/configs/userStateToProps";
import "./styles.css";

class FoodModalCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddFood = this.handleAddFood.bind(this);
    this.handleDeleteFood = this.handleDeleteFood.bind(this);
  }

  async handleAddFood() {
    const data = {
      foodName: this.props.food.name,
      restaurantId: this.props.food.restaurant.id,
    };

    try {
      const response = await API.post("/cart", data);
      const user = response.data;
      this.props.dispatch({ type: "SET_USER", user: user });
      toast.success(success.ADD_TO_CART);
    } catch (err) {
      console.log(err);
      toast.error(error.INTERNAL);
    }
  }

  async handleDeleteFood() {
    const data = {
      foodName: this.props.food.name,
      restaurantId: this.props.food.restaurant.id,
    };

    try {
      const response = await API.delete("/cart", {
        data: data,
      });
      const newUser = response.data;
      console.log(newUser);
      this.props.dispatch({ type: "SET_USER", user: newUser });
      toast.success(success.REMOVE_FROM_CART);
    } catch (err) {
      console.log(err.response);
      toast.error(error.INTERNAL);
    }
  }

  render() {
    return (
      <div className="foodparty-modal-card flex flex-col justify-content-around align-items-center">
        <div className="foodparty-modal-top flex justify-content-center align-items-end">
          <span>{this.props.food.restaurant.name}</span>
        </div>
        <div className="foodparty-modal-middle flex-center">
          <div className="foodparty-modal-image">
            <img src={this.props.food.image} alt="Food" />
          </div>
          <div className="foodparty-modal-food-info flex flex-col align-items-start justify-content-around">
            <div className="foodparty-modal-info-top flex">
              <span className="foodparty-modal-name">
                {this.props.food.name}
              </span>
              <span className="star">★</span>
              <span>{convertToPersianDigits(this.props.food.popularity)}</span>
            </div>
            <div className="foodparty-description">
              <p>{this.props.food.description}</p>
            </div>
            <div className="foodparty-modal-price flex justify-content-between">
              <span className="old-price">
                {convertToPersianDigits(this.props.food.oldPrice)}
              </span>
              <span className="new-price">
                {convertToPersianDigits(this.props.food.price)} تومان
              </span>
            </div>
          </div>
        </div>
        <div className="foodparty-modal-bottom flex justify-content-between align-items-center">
          <span className="loghme-button-style foodparty-button-info foodparty-count">
            موجودی: {convertToPersianDigits(this.props.food.count)}
          </span>
          <div className="food-item-count-settings flex justify-content-around align-items-center">
            <i
              className="glyph-icon flaticon-plus"
              onClick={this.handleAddFood}
            ></i>
            <span>
              {this.props.user.cart
                ? convertToPersianDigits(
                    getInCartCount(this.props.user.cart, this.props.food)
                  )
                : "۰"}
            </span>
            <i
              className="glyph-icon flaticon-minus"
              onClick={this.handleDeleteFood}
            ></i>
          </div>
          <button
            className="loghme-button loghme-button-style foodparty-buy"
            onClick={this.handleAddFood}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(FoodModalCard);
