import React from "react";
import "./styles.css";
import convertToPersianDigits from "../../../../../../../../../services/tools/convertToPersianDigits";

class MenuCard extends React.Component {
  render() {
    return (
      <div className="loghme-card">
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
        <div className="menu-button-container flex-center">
          <a href="/menu" className="loghme-button-style">
            افزودن به سبد خرید
          </a>
        </div>
      </div>
    );
  }
}

export default MenuCard;
