import React from "react";
import RestaurantCard from './components/RestaurantCard';

class RestaurantsContainer extends React.Component {
  render() {
    return (
      <div className="container flex-wrap">
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
      </div>
    );
  }
}

export default RestaurantsContainer;