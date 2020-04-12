import React from "react";
import RestaurantCard from "./components/RestaurantCard";

class RestaurantsContainer extends React.Component {
  render() {
    const restaurants = this.props.restaurants;
    const restaurantCards = restaurants.map((restaurant) => (
      <RestaurantCard restaurant={restaurant} key={restaurant.id} />
    ));

    return <div className="container flex-wrap">{restaurantCards}</div>;
  }
}

export default RestaurantsContainer;
