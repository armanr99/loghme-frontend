import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeIntro from "./components/HomeIntro";
import HomeRestaurants from "./components/HomeRestaurants";
import HomeFoodParty from "./components/HomeFoodParty";
import Loading from "../../components/Loading";
import API from "../../services/api";
import "./styles.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      partyFoods: [],
      loading: true,
    };

    this.fetchRestaurants = this.fetchRestaurants.bind(this);
    this.fetchPartyFoods = this.fetchPartyFoods.bind(this);
    this.fetchRemainingSeconds = this.fetchRemainingSeconds.bind(this);
  }

  async fetchRestaurants() {
    const response = await API.get("/restaurants");
    const restaurants = response.data.restaurants;
    this.setState({ restaurants });
  }

  async fetchPartyFoods() {
    const response = await API.get("foodparty");
    const partyFoods = response.data.partyFoods;
    this.setState({ partyFoods });
  }

  async fetchRemainingSeconds() {
    const response = await API.get("foodparty/remainingSeconds");
    const remainingSeconds = response.data.remainingSeconds;
    this.setState({ remainingSeconds });
  }

  async componentDidMount() {
    this.setState({ loading: true });
    await Promise.all([
      this.fetchRestaurants(),
      this.fetchPartyFoods(),
      this.fetchRemainingSeconds(),
    ]);
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.loading ? (
          <Loading />
        ) : (
          <main className="home">
            <HomeIntro />
            <HomeFoodParty
              partyFoods={this.state.partyFoods}
              remainingSeconds={this.state.remainingSeconds}
            />
            <HomeRestaurants restaurants={this.state.restaurants} />
          </main>
        )}
        <Footer />
      </div>
    );
  }
}

export default Home;
