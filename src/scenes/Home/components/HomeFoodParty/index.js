import React from "react";
import FoodPartyContainer from "./components/FoodPartyContainer";
import FoodPartyTitle from "./components/FoodPartyTitle";
import PropTypes from "prop-types";
import "./styles.css";

class HomeFoodParty extends React.Component {
  render() {
    return (
      <div className="home-section flex flex-col justify-content-center align-items-center home-food-party">
        <FoodPartyTitle remainingSeconds={this.props.remainingSeconds} />
        <FoodPartyContainer partyFoods={this.props.partyFoods} />
      </div>
    );
  }
}

export default HomeFoodParty;

HomeFoodParty.propTypes = {
  remainingSeconds: PropTypes.number.isRequired,
  partyFoods: PropTypes.array.isRequired,
};
