import React from "react";
import RestaurantInfoTitle from "./components/RestaurantInfoTitle";
import RestaurantInfoContent from "./components/RestaurantInfoContent";
import PropTypes from "prop-types";

class RestaurantInfo extends React.Component {
  render() {
    return (
      <div>
        <RestaurantInfoTitle />
        <RestaurantInfoContent restaurant={this.props.restaurant} />
      </div>
    );
  }
}

export default RestaurantInfo;

RestaurantInfo.propTypes = {
  restaurant: PropTypes.object.isRequired,
};
