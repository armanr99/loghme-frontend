import React from "react";
import pizza from "../../../../../../../../assets/images/pizza.jpg";
import "./styles.css";

class FoodPartyCard extends React.Component {
  render() {
    return (
      <div className="foodparty-card loghme-card">
        <div className="foodparty-food-info flex flex-col">
          <div className="foodparty-food-info-top">
            <div className="foodparty-more-info flex flex-col align-items-end justify-content-start">
              <div className="foodparty-name">
                <span>پیتزا اعلا</span>
              </div>
              <div className="foodparty-score">
                <span class="star">★</span>
                <span>۵</span>
              </div>
            </div>
            <div className="foodparty-image">
              <img src={pizza} alt="food" />
            </div>
          </div>
          <div className="foodparty-food-info-bottom flex flex-col justify-content-around align-items-center">
            <div className="foodparty-price flex justify-content-between">
              <span className="new-price">۲۹۰۰۰</span>
              <span className="old-price">۳۹۰۰۰</span>
            </div>
            <div className="foodparty-order flex justify-content-between">
              <a href="/menu" class="loghme-button-style foodparty-buy">
                خرید
              </a>
              <span class="loghme-button-style foodparty-button-info">
                موجودی: ۳
              </span>
            </div>
          </div>
        </div>
        <div className="foodparty-restaurant-name flex flex-center">
          <span>رستوران خامس</span>
        </div>
      </div>
    );
  }
}

export default FoodPartyCard;
