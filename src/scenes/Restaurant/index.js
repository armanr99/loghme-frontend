import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantLogo from "./components/RestaurantLogo";
import RestaurantName from "./components/RestaurantName";
import RestaurantInfo from "./components/RestaurantInfo";
import API from "../../services/api";
import "./styles.css";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {
        menu: [],
      },
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    const response = await API.get(`/restaurants/${id}`);
    const restaurant = response.data;
    this.setState({ restaurant });
  }

  render() {
    return (
      <div>
        <Header />
        <main className="restaurant">
          <RestaurantLogo restaurant={this.state.restaurant} />
          <RestaurantName restaurant={this.state.restaurant} />
          <RestaurantInfo restaurant={this.state.restaurant} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Restaurant;
