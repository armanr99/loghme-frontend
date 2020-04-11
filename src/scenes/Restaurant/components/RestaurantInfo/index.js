import React from "react";
import RestaurantInfoTitle from "./components/RestaurantInfoTitle";
import RestaurantInfoContent from "./components/RestaurantInfoContent";

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
