import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import API from "../../../../../../services/api";

class RestaurantsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    };
  }

  async componentDidMount() {
    const response = await API.get("/restaurants");
    const restaurants = response.data.restaurants;
    this.setState({ restaurants });
  }

  render() {
    const restaurants = this.state.restaurants;
    const restaurantCards = restaurants.map((restaurant) => (
      <RestaurantCard key={restaurants.id} restaurant={restaurant} />
    ));

    return <div className="container flex-wrap">{restaurantCards}</div>;
  }
}

export default RestaurantsContainer;
