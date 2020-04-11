import React from "react";
import "./styles.css";
import CartItem from "./components/CartItem";
import OrderInfo from "./components/OrderInfo";

class Cart extends React.Component {
  render() {
    return (
      <div class="restaurant-cart flex flex-col justify-content-around align-items-center">
        <p>سبد خرید</p>
        <div class="cart-items">
          <CartItem />
          <CartItem />
        </div>
        <OrderInfo />
        <button class="loghme-button loghme-button-style">تأیید نهایی</button>
      </div>
    );
  }
}

export default Cart;
