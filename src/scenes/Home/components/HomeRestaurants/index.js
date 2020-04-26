import React from "react";
import PropTypes from "prop-types";
import RestaurantsContainer from "./components/RestaurantsContainer";
import SectionTitle from "../../../../components/SectionTitle";
import "./styles.css";

class HomeRestaurants extends React.Component {
  render() {
    return (
      <div className="home-section flex flex-col justify-content-center align-items-center home-restaurants">
        <SectionTitle title="رستوران‌ها" />
        <RestaurantsContainer restaurants={this.props.restaurants} />
        <button
          className="loghme-button loghme-button-style foodparty-buy add-more-button"
          onClick={this.props.fetchMoreRestaurants}
        >
          نمایش بیشتر
        </button>
      </div>
    );
  }
}

export default HomeRestaurants;

HomeRestaurants.propTypes = {
  restaurants: PropTypes.array.isRequired,
};
