import React from "react";
import "./styles.css";

class MenuCard extends React.Component {
  render() {
    return (
      <div class="loghme-card">
        <div class="menu-info flex-center flex-col">
          <div class="menu-img-container flex-center">
            <img src="../assets/images/pizza.jpg" alt="Food" />
          </div>
          <div class="menu-food-name flex justify-content-around align-items-center">
            <span>پیتزا اعلا</span>
            <span>۵</span>
            <span class="star">★</span>
          </div>
          <div class="menu-food-price flex-center">
            <span>۳۹۰۰۰ تومان</span>
          </div>
        </div>
        <div class="menu-button-container flex-center">
          <a href="/menu" class="loghme-button-style">
            افزودن به سبد خرید
          </a>
        </div>
      </div>
    );
  }
}

export default MenuCard;
