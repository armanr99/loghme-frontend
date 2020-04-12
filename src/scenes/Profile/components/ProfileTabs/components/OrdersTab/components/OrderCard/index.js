import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import OrderInfo from "./components/OrderInfo";
import convertToPersianDigits from "../../../../../../../../services/tools/convertToPersianDigits";
import "./styles.css";

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

  handleShowFactor(event) {
    event.preventDefault();
    
    this.setState({ showFactor: true });
  }

  render() {
    let stateText = "مشاهده فاکتور";
    if (this.props.order.state === "Delivering") stateText = "پیک در مسیر";
    else if (this.props.order.state === "Searching")
      stateText = "در جست‌و‌جوی پیک";

    let stateClass = "factor-button";
    if (this.props.order.state === "Delivering") stateClass = "in-delivery";
    else if (this.props.order.state === "Searching")
      stateClass = "delivery-searching";

    return (
      <div className="profile-order row">
        <Modal
          show={this.state.showFactor}
          onHide={this.handleCloseFactor}
          style={{ marginTop: "100px" }}
          size="lg"
        >
          <OrderInfo order={this.props.order} />
        </Modal>
        <div className="col-lg-1 col-2 flex-center">
          <span>{convertToPersianDigits(this.props.index)}</span>
        </div>
        <div className="col-lg-6 col-5 profile-order-restaurant-name flex-center">
          <span>{this.props.order.cart.items[0].restaurant.name}</span>
        </div>
        <div className="col-lg-5 col-5 delivery-button-container flex-center">
          <button
            className={`loghme-button loghme-button-style ${stateClass} delivery-button`}
            onClick={this.handleShowFactor}
          >
            {stateText}
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
    state: PropTypes.string.isRequired,
  }).isRequired,
};
