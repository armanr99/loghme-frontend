import React from "react";
import Slider from "react-slick";
import FoodPartyCard from "./components/FoodPartyCard";
import getSliderSettings from "./services/getSliderSettings";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

class FoodPartyContainer extends React.Component {
  render() {
    const partyFoods = this.props.partyFoods;
    const foodPartyCards = partyFoods.map((partyFood) => (
      <FoodPartyCard
        partyFood={partyFood}
        key={partyFood.name + partyFood.restaurant.id}
      />
    ));
    const sliderSettings = getSliderSettings(foodPartyCards.length);

    return (
      <div className="foodparty-container">
        <Slider {...sliderSettings}>{foodPartyCards}</Slider>
      </div>
    );
  }
}

export default FoodPartyContainer;

FoodPartyContainer.propTypes = {
  partyFoods: PropTypes.array.isRequired
}
