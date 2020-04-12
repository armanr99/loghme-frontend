import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";
import mapStateToProps from "../../../../services/redux/configs/userStateToProps";
import PropTypes from "prop-types";

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

export default connect(mapStateToProps)(OrderInfo);

OrderInfo.propTypes = {
  user: PropTypes.shape({
    cart: PropTypes.shape({ totalPrice: PropTypes.number.isRequired })
      .isRequired,
  }).isRequired,
};
