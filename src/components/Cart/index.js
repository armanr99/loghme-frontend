import React from "react";
import "./styles.css";
import CartItem from "./components/CartItem";
import OrderInfo from "./components/OrderInfo";

class Cart extends React.Component {
  render() {
    const restaurantCss = this.props.inRestaurant ? "restaurant-page-cart" : "";

    return (
      <div className={`restaurant-cart ${restaurantCss} flex flex-col justify-content-around align-items-center sm-col`}>
        <p>سبد خرید</p>
        <div className="cart-items">
          <CartItem />
          <CartItem />
        </div>
        <OrderInfo />
        <button className="loghme-button loghme-button-style">تأیید نهایی</button>
      </div>
    );
  }
}

export default Cart;
