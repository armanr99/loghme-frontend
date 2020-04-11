import React from "react";
import "./styles.css";

class OrderCard extends React.Component {
  render() {
    return (
      <div className="profile-order row">
        <div className="col-lg-1 col-2 flex-center">
          <span>{this.props.index}</span>
        </div>
        <div className="col-lg-6 col-5 profile-order-restaurant-name flex-center">
          <span>{this.props.order.cart.restaurant.name}</span>
        </div>
        <div className="col-lg-5 col-5 delivery-button-container flex-center">
          <a
            href="/menu"
            className="loghme-button-style factor-button delivery-button"
          >
            مشاهده فاکتور
          </a>
        </div>
      </div>
    );
  }
}

export default OrderCard;
