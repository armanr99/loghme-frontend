import React from "react";
import RestaurantsContainer from "./components/RestaurantsContainer";
import SectionTitle from "../../../../components/SectionTitle";
import "./styles.css";

class HomeRestaurants extends React.Component {
  render() {
    return (
      <div class="home-section flex flex-col justify-content-center align-items-center home-restaurants">
        <SectionTitle title="رستوران‌ها" />
        <RestaurantsContainer />
      </div>
    );
  }
}

export default HomeRestaurants;
