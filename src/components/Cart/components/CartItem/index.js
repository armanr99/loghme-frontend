import React from "react";
import "./styles.css";

class CartItem extends React.Component {
  render() {
    return (
      <div class="cart-item flex justify-content-around align-items-center">
        <div class="cart-item-name">
          <span>پیتزا اعلا</span>
        </div>
        <div class="cart-item-info flex flex-col justify-content-center align-items-center">
          <div class="cart-item-count flex justify-content-around align-items-center">
            <i class="glyph-icon flaticon-plus"></i>
            <span>۲</span>
            <i class="glyph-icon flaticon-minus"></i>
          </div>
          <div class="cart-item-price">
            <span>۷۸۰۰۰ تومان</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
