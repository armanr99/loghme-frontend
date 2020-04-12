import React from "react";
import "./styles.css";
import CartItemCard from "./components/CartItemCard";
import OrderInfo from "./components/OrderInfo";
import { connect } from "react-redux";
import mapStateToProps from "../../services/redux/configs/userStateToProps";

class Cart extends React.Component {
  render() {
    const restaurantCss = this.props.inRestaurant ? "restaurant-page-cart" : "";
    const cartItems = this.props.user.cart.items;
    const cartItemCards = cartItems.map((cartItem) => (
      <CartItemCard cartItem={cartItem} key={cartItem.food.name} />
    ));

    return (
      <div
        className={`restaurant-cart ${restaurantCss} flex flex-col justify-content-around align-items-center sm-col`}
      >
        <p>سبد خرید</p>
        <div className="cart-items">{cartItemCards}</div>
        <OrderInfo />
        <button className="loghme-button loghme-button-style">
          تأیید نهایی
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cart);
