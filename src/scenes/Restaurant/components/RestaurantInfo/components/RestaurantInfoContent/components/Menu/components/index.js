import React from "react";import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import FoodModalCard from "../../../../../../../../../components/FoodModalCard";
import convertToPersianDigits from "../../../../../../../../../services/tools/convertToPersianDigits";
import "./styles.css";

class MenuCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
    };

    this.handleShowCard = this.handleShowCard.bind(this);
    this.handleCloseCard = this.handleCloseCard.bind(this);
  }

  handleCloseCard() {
    this.setState({ showCart: false });
  }

  handleShowCard() {
    this.setState({ showCart: true });
  }

  render() {
    return (
      <div className="loghme-card">
        <Modal
          show={this.state.showCart}
          onHide={this.handleCloseCard}
          style={{ marginTop: "100px" }}
          size="md"
        >
          <FoodModalCard food={this.props.food} />
        </Modal>
        <div className="menu-info flex-center flex-col">
          <div className="menu-img-container flex-center">
            <img src={this.props.food.image} alt="Food" />
          </div>
          <div className="menu-food-name flex justify-content-around align-items-center">
            <span>{this.props.food.name}</span>
            <span>{convertToPersianDigits(this.props.food.popularity)}</span>
            <span className="star">★</span>
          </div>
          <div className="menu-food-price flex-center">
            <span>{convertToPersianDigits(this.props.food.price)} تومان</span>
          </div>
        </div>
        <div className="loghme-button menu-button-container flex-center">
          <button
            className="loghme-button loghme-button-style"
            onClick={this.handleShowCard}
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    );
  }
}

export default MenuCard;

MenuCard.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
