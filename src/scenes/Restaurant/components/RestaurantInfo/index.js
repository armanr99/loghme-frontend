import React from "react";
import RestaurantInfoTitle from "./components/RestaurantInfoTitle";
import RestaurantInfoContent from "./components/RestaurantInfoContent";

class RestaurantInfo extends React.Component {
  render() {
    return (
      <div>
        <RestaurantInfoTitle />
        <RestaurantInfoContent
          restaurant={this.props.restaurant}
          user={this.props.user}
          updateUser={this.props.updateUser}
        />
      </div>
    );
  }
}

export default RestaurantInfo;
