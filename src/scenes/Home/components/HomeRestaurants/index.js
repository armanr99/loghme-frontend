import React from "react";
import RestaurantsContainer from "./components/RestaurantsContainer";
import "./styles.css";

class HomeRestaurants extends React.Component {
  render() {
    return (
      <div class="home-section flex flex-col justify-content-center align-items-center home-restaurants">
        <div class="section-title-container">
          <span class="section-title">رستوران‌ها</span>
        </div>
        <RestaurantsContainer />
      </div>
    );
  }
}

export default HomeRestaurants;
