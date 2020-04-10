import React from "react";
import SectionTitle from "../../../../components/SectionTitle";
import FoodPartyContainer from "./components/FoodPartyContainer";
import "./styles.css";

class HomeFoodParty extends React.Component {
  render() {
    return (
      <div class="home-section flex flex-col justify-content-center align-items-center home-food-party">
        <SectionTitle title="جشن غذا!">
          <p class="time-remaining">زمان باقی‌مانده: ۲۱:۴۸</p>
        </SectionTitle>
        <FoodPartyContainer />
      </div>
    );
  }
}

export default HomeFoodParty;
