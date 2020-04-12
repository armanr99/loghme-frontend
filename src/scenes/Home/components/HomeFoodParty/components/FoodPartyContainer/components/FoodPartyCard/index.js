import React from "react";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import FoodModalCard from "../../../../.../../../../../../components/FoodModalCard";
import convertToPersianDigits from "../../../../../../../../services/tools/convertToPersianDigits";
import "./styles.css";

class FoodPartyCard extends React.Component {
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
      <div className="foodparty-card loghme-card">
        <Modal
          show={this.state.showCart}
          onHide={this.handleCloseCard}
          centerd={true}
          style={{ marginTop: "100px" }}
          size="md"
        >
          <FoodModalCard food={this.props.partyFood} isPartyFood={true} />
        </Modal>
        <div className="foodparty-food-info flex flex-col">
          <div className="foodparty-food-info-top flex flex-center">
            <div className="foodparty-image">
              <img src={this.props.partyFood.image} alt="food" />
            </div>
            <div className="foodparty-more-info flex flex-col align-items-start justify-content-start">
              <div className="foodparty-name">
                <p>{this.props.partyFood.name}</p>
              </div>
              <div className="foodparty-score">
                <span className="star">★</span>
                <span>
                  {" "}
                  {convertToPersianDigits(this.props.partyFood.popularity)}
                </span>
              </div>
            </div>
          </div>
          <div className="foodparty-food-info-bottom flex flex-col justify-content-around align-items-center">
            <div className="foodparty-price flex justify-content-between">
              <span className="old-price">
                {convertToPersianDigits(this.props.partyFood.oldPrice)}
              </span>
              <span className="new-price">
                {convertToPersianDigits(this.props.partyFood.price)}
              </span>
            </div>
            <div className="foodparty-order flex justify-content-between">
              <span className="loghme-button-style foodparty-button-info">
                موجودی: {convertToPersianDigits(this.props.partyFood.count)}
              </span>
              <button
                className="loghme-button loghme-button-style foodparty-buy"
                onClick={this.handleShowCard}
              >
                خرید
              </button>
            </div>
          </div>
        </div>
        <div className="foodparty-restaurant-name flex flex-center">
          <span>{this.props.partyFood.restaurant.name}</span>
        </div>
      </div>
    );
  }
}

export default FoodPartyCard;

FoodPartyCard.propTypes = {
  partyFood: PropTypes.shape({
    restaurant: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    popularity: PropTypes.number.isRequired,
  }).isRequired,
};
