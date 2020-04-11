import React from "react";
import convertToPersianDigits from "../../../../../../../../services/tools/convertToPersianDigits";
import "./styles.css";

class FoodPartyCard extends React.Component {
  render() {
    return (
      <div className="foodparty-card loghme-card">
        <div className="foodparty-food-info flex flex-col">
          <div className="foodparty-food-info-top flex flex-center">
            <div className="foodparty-image">
              <img src={this.props.partyFood.image} alt="food" />
            </div>
            <div className="foodparty-more-info flex flex-col align-items-start justify-content-start">
              <div className="foodparty-name">
                <span>{this.props.partyFood.name}</span>
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
              <a href="/menu" className="loghme-button-style foodparty-buy">
                خرید
              </a>
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
