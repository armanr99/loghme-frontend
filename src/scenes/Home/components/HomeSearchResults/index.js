import React from "react";
import PropTypes from "prop-types";
import RestaurantsContainer from "../RestaurantsContainer";
import SectionTitle from "../../../../components/SectionTitle";
import "./styles.css";

class HomeSearchResults extends React.Component {
  render() {
    const visibilityClass = this.props.visible ? "flex" : "d-none";

    return (
      <div className={`home-section flex flex-col justify-content-center align-items-center search-restaurants ${visibilityClass}`}>
        <SectionTitle title="نتایج جست‌و‌جو" />
        <RestaurantsContainer restaurants={this.props.restaurants} />
      </div>
    );
  }
}

export default HomeSearchResults;

HomeSearchResults.propTypes = {
  restaurants: PropTypes.array.isRequired,
  toBeVisible: PropTypes.bool
};
