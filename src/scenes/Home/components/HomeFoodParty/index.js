import React from "react";
import FoodPartyContainer from "./components/FoodPartyContainer";
import FoodPartyTitle from "./components/FoodPartyTitle";
import "./styles.css";

class HomeFoodParty extends React.Component {
  render() {
    return (
      <div className="home-section flex flex-col justify-content-center align-items-center home-food-party">
        <FoodPartyTitle />
        <FoodPartyContainer />
      </div>
    );
  }
}

export default HomeFoodParty;
