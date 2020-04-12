import React from "react";
import "./styles.css";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";

class OrderInfo extends React.Component {
  render() {
    return (
      <div className="order-price">
        <span>جمع کل: </span>
        <span>
          {convertToPersianDigits(this.props.user.cart.totalPrice)} تومان
        </span>
      </div>
    );
  }
}

export default OrderInfo;
