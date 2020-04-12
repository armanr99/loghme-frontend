import React from "react";
import PropTypes from "prop-types";
import API from "../../services/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import RestaurantLogo from "./components/RestaurantLogo";
import RestaurantName from "./components/RestaurantName";
import RestaurantInfo from "./components/RestaurantInfo";
import Loading from "../../components/Loading";
import "./styles.css";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {
        menu: [],
      },
      loading: true,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const id = this.props.match.params.id;
    const response = await API.get(`/restaurants/${id}`);
    const restaurant = response.data;
    this.setState({ restaurant, loading: false });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.loading ? (
          <Loading />
        ) : (
          <main className="restaurant">
            <RestaurantLogo restaurant={this.state.restaurant} />
            <RestaurantName restaurant={this.state.restaurant} />
            <RestaurantInfo restaurant={this.state.restaurant} />
          </main>
        )}
        <Footer />
      </div>
    );
  }
}

export default Restaurant;

Restaurant.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }),
};
