import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HomeIntro from "./components/HomeIntro";
import HomeRestaurants from "./components/HomeRestaurants";
import "./styles.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main class="home">
          <HomeIntro />
          <HomeRestaurants />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Home;
