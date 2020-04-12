import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import "./styles.css";
import OrderInfo from "./components/OrderInfo";

class OrderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFactor: false,
    };

    this.handleShowFactor = this.handleShowFactor.bind(this);
    this.handleCloseFactor = this.handleCloseFactor.bind(this);
  }

  handleCloseFactor() {
    this.setState({ showFactor: false });
  }

  handleShowFactor() {
    this.setState({ showFactor: true });
  }

  render() {
    return (
      <div className="profile-order row">
        <Modal
          show={this.state.showFactor}
          onHide={this.handleCloseFactor}
          centerd={true}
          style={{ marginTop: "100px" }}
          size="lg"
        >
          <OrderInfo order={this.props.order} />
        </Modal>
        <div className="col-lg-1 col-2 flex-center">
          <span>{this.props.index}</span>
        </div>
        <div className="col-lg-6 col-5 profile-order-restaurant-name flex-center">
          <span>{this.props.order.cart.items[0].restaurant.name}</span>
        </div>
        <div className="col-lg-5 col-5 delivery-button-container flex-center">
          <button
            className="loghme-button loghme-button-style factor-button delivery-button"
            onClick={this.handleShowFactor}
          >
            مشاهده فاکتور
          </button>
        </div>
      </div>
    );
  }
}

export default OrderCard;

OrderCard.propTypes = {
  index: PropTypes.number.isRequired,
  order: PropTypes.shape({
    cart: PropTypes.shape({ items: PropTypes.array.isRequired }).isRequired,
  }).isRequired,
};
