import React from "react";
import PropTypes from "prop-types";
import convertToPersianDigits from "../../../../../../../../../../services/tools/convertToPersianDigits";
import "./styles.css";

class OrderInfo extends React.Component {
  render() {
    const cartItems = this.props.order.cart.items;
    const itemRows = cartItems.map((cartItem, index) => (
      <tr key={cartItem.food.name}>
        <th scope="row">{convertToPersianDigits(index + 1)}</th>
        <td>{cartItem.food.name}</td>
        <td>{convertToPersianDigits(cartItem.count)}</td>
        <td>{convertToPersianDigits(cartItem.food.price)}</td>
      </tr>
    ));

    return (
      <div className="order-info flex flex-col align-items-center">
        <div className="order-info-restaurant flex-center">
          <span>{this.props.order.cart.items[0].restaurant.name}</span>
        </div>
        <div className="order-info-list">
          <table className="table table-hover table-bordered">
            <thead className="column-color">
              <tr>
                <th className="col-1">ردیف</th>
                <th className="col-7">نام غذا</th>
                <th className="col-2">تعداد</th>
                <th className="col-2">قیمت</th>
              </tr>
            </thead>
            <tbody>{itemRows}</tbody>
          </table>
        </div>
        <div className="order-info-price flex justify-content-end">
          <span>
            جمع کل: {convertToPersianDigits(this.props.order.cart.totalPrice)}{" "}
            تومان
          </span>
        </div>
      </div>
    );
  }
}

export default OrderInfo;

OrderInfo.propTypes = {
  order: PropTypes.shape({
    cart: PropTypes.shape({ items: PropTypes.array.isRequired }).isRequired,
  }).isRequired,
};
