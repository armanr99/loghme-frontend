import React from "react";
import Cart from "../../../Cart";
import Modal from "react-bootstrap/Modal";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";
import { connect } from "react-redux";
import mapStateToProps from "../../../../services/redux/configs/userStateToProps";
import "./styles.css";
import { Link } from "react-router-dom";

class HeaderInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
    };

    this.handleShowCart = this.handleShowCart.bind(this);
    this.handleCloseCart = this.handleCloseCart.bind(this);
  }

  handleCloseCart() {
    this.setState({ showCart: false });
  }

  handleShowCart() {
    this.setState({ showCart: true });
  }

  render() {
    return (
      <li>
        <Modal
          show={this.state.showCart}
          onHide={this.handleCloseCart}
          centerd={true}
          style={{ marginTop: "100px" }}
          size="sm"
        >
          <Cart inRestaurant={false} />
        </Modal>
        <ul>
          <li className="flex-center">
            {this.props.user.name}
            <Link to="/exit" className="header-exit flex-center">
              خروج
            </Link>
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
