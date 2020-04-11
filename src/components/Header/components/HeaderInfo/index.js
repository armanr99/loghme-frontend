import React from "react";
import Cart from "../../../Cart";
import Modal from "react-bootstrap/Modal";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";
import "./styles.css";

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
          <Cart />
        </Modal>
        <ul>
          <li className="flex-center">
            <a href="/exit" className="header-exit flex-center">
              خروج
            </a>
          </li>
          <li className="flex-center">
            <a href="./profile.html" className="flex-center">
              حساب کاربری
            </a>
          </li>
          <li className="header-cart flex-center" onClick={this.handleShowCart}>
            <div href="/cart" className="flex-center">
              <span className="cart-counter flex-center">
                {convertToPersianDigits(this.props.user.cart.length)}
              </span>
              <i className="flaticon-smart-cart"></i>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}

export default HeaderInfo;
