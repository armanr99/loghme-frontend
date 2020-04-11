import React from "react";
import "./styles.css";
import OrdersCart from "./components/OrderCart";

class OrdersTab extends React.Component {
  render() {
    return (
      <div className="profile-tab orders-tab">
        <div className="profile-orders-container flex-center flex-col">
          <OrdersCart />
          <OrdersCart />
          <OrdersCart />
          <OrdersCart />
          <OrdersCart />
          <OrdersCart />
        </div>
      </div>
    );
  }
}

export default OrdersTab;
