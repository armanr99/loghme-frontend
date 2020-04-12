import React from "react";
import OrderInfo from "./components/OrderInfo";
import CartItemCard from "./components/CartItemCard";
import API from "../../services/api";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import mapStateToProps from "../../services/redux/configs/userStateToProps";
import { error, success } from "../../services/toastify/configs";
import "./styles.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.handleFinalize = this.handleFinalize.bind(this);
  }

  async handleFinalize() {
    if (this.props.user.cart.items.length === 0) {
      toast.error(error.EMPTY_CARD);
      return;
    }

    try {
      const response = await API.post("/cart/order");
      const user = response.data;
      this.props.dispatch({ type: "SET_USER", user: user });
      toast.success(success.FINALIZE_ORDER);
    } catch (err) {
      toast.error(error.INTERNAL);
    }
  }

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
        <button
          className="loghme-button loghme-button-style"
          onClick={this.handleFinalize}
        >
          تأیید نهایی
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Cart);

Cart.propTypes = {
  inRestaurant: PropTypes.bool,
  user: PropTypes.shape({
    cart: PropTypes.shape({ items: PropTypes.array.isRequired }).isRequired,
  }).isRequired,
};
