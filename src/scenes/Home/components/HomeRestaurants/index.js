import React from "react";
import RestaurantsContainer from "./components/RestaurantsContainer";
import SectionTitle from "../../../../components/SectionTitle";
import PropTypes from "prop-types";
import "./styles.css";

class HomeRestaurants extends React.Component {
  render() {
    return (
      <div className="home-section flex flex-col justify-content-center align-items-center home-restaurants">
        <SectionTitle title="رستوران‌ها" />
        <RestaurantsContainer restaurants={this.props.restaurants} />
      </div>
    );
  }
}

export default HomeRestaurants;

HomeRestaurants.propTypes = {
  restaurants: PropTypes.array.isRequired
}