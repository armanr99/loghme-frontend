import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeIntro from "./components/HomeIntro";
import HomeRestaurants from "./components/HomeRestaurants";
import HomeFoodParty from "./components/HomeFoodParty";
import "./styles.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header user={this.props.user} updateUser={this.props.updateUser} />
        <main className="home">
          <HomeIntro />
          <HomeFoodParty />
          <HomeRestaurants />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
