import React from "react";
import Slider from "react-slick";
import FoodPartyCard from "./components/FoodPartyCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";
import getSliderSettings from "./services/getSliderSettings";
import API from "../../../../../../services/api";

class FoodPartyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      partyFoods: [],
    };
  }

  async componentDidMount() {
    const response = await API.get("foodparty");
    const partyFoods = response.data.partyFoods;
    this.setState({ partyFoods });
  }

  render() {
    const partyFoods = this.state.partyFoods;
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
