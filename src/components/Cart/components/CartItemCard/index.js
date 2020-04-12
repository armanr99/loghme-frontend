import React from "react";
import "./styles.css";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";

class CartItemCard extends React.Component {
  render() {
    return (
      <div className="cart-item flex justify-content-around align-items-center">
        <div className="cart-item-name">
          <span>{this.props.cartItem.food.name}</span>
        </div>
        <div className="cart-item-info flex flex-col justify-content-center align-items-center">
          <div className="cart-item-count flex justify-content-around align-items-center">
            <i className="glyph-icon flaticon-plus"></i>
            <span>{convertToPersianDigits(this.props.cartItem.count)}</span>
            <i className="glyph-icon flaticon-minus"></i>
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

export default CartItemCard;
