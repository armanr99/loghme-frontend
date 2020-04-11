import React from "react";
import "./styles.css";

class CartItem extends React.Component {
  render() {
    return (
      <div className="cart-item flex justify-content-around align-items-center">
        <div className="cart-item-name">
          <span>پیتزا اعلا</span>
        </div>
        <div className="cart-item-info flex flex-col justify-content-center align-items-center">
          <div className="cart-item-count flex justify-content-around align-items-center">
            <i className="glyph-icon flaticon-plus"></i>
            <span>۲</span>
            <i className="glyph-icon flaticon-minus"></i>
          </div>
          <div className="cart-item-price">
            <span>۷۸۰۰۰ تومان</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
