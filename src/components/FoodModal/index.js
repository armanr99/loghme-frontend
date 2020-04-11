import React from "react";
import img from "../../assets/images/pizza.jpg";
import "./styles.css";

class FoodModal extends React.Component {
  render() {
    return (
      <div className="foodparty-modal-card flex flex-col justify-content-around align-items-center">
        <div className="foodparty-modal-top flex justify-content-center align-items-end">
          <span>رستوران خامس</span>
        </div>
        <div className="foodparty-modal-middle flex-center">
          <div className="foodparty-modal-image">
            <img src={img} alt="Food" />
          </div>
          <div className="foodparty-modal-food-info flex flex-col align-items-start justify-content-around">
            <div className="foodparty-modal-info-top">
              <span className="foodparty-modal-name">پیتزا</span>
              <span className="star">★</span>
              <span>۵</span>
            </div>
            <div className="foodparty-description">
              <p>پخته‌شده با مرغوب‌ترین مواد اولیه</p>
            </div>
            <div className="foodparty-modal-price flex justify-content-between">
              <span className="old-price">۳۹۰۰۰</span>
              <span className="new-price">۲۹۰۰۰ تومان</span>
            </div>

            {/* <div className="foodparty-score">
                <span className="star">★</span>
                <span> ۵</span>
              </div> */}
          </div>
        </div>
        <div className="foodparty-modal-bottom flex justify-content-between align-items-center">
          <span className="loghme-button-style foodparty-button-info foodparty-count">
            موجودی: ۳
          </span>
          <div className="food-item-count-settings flex justify-content-around align-items-center">
            <i className="glyph-icon flaticon-plus"></i>
            <span>۲</span>
            <i className="glyph-icon flaticon-minus"></i>
          </div>
          <a href="/menu" className="loghme-button-style foodparty-buy">
            افزودن به سبد خرید
          </a>
        </div>
      </div>
    );
  }
}

export default FoodModal;
