import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";
import mapStateToProps from "../../../../services/redux/configs/userStateToProps";
import "./styles.css";

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
