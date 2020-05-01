import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import Cart from "../../../Cart";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";
import mapStateToProps from "../../../../services/redux/configs/userStateToProps";
import "./styles.css";

class HeaderInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
    };

    this.handleShowCart = this.handleShowCart.bind(this);
    this.handleCloseCart = this.handleCloseCart.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleCloseCart() {
    this.setState({ showCart: false });
  }

  handleShowCart() {
    this.setState({ showCart: true });
  }

  handleLogout(event) {
    event.preventDefault();
    localStorage.removeItem("token");
    this.props.dispatch({ type: "LOGOUT_SUCCESS" });
  }

  render() {
    return (
      <li>
        <Modal
          show={this.state.showCart}
          onHide={this.handleCloseCart}
          style={{ marginTop: "100px" }}
          size="sm"
        >
          <Cart inRestaurant={false} />
        </Modal>
        <ul>
          <li className="flex-center">
            <button
              onClick={this.handleLogout}
              className="loghme-button header-exit flex-center"
            >
              خروج
            </button>
          </li>
          <li className="flex-center">
            <Link to="/profile" className="flex-center">
              حساب کاربری
            </Link>
          </li>
          <li className="header-cart flex-center" onClick={this.handleShowCart}>
            <div href="/cart" className="flex-center">
              <span className="cart-counter flex-center">
                {this.props.user.cart
                  ? convertToPersianDigits(this.props.user.cart.items.length)
                  : "۰"}
              </span>
              <i className="flaticon-smart-cart"></i>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}

export default connect(mapStateToProps)(HeaderInfo);

HeaderInfo.propTypes = {
  user: PropTypes.shape({
    cart: PropTypes.shape({
      items: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};
