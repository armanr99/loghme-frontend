import React from "react";
import HomeIntroCover from './components/HomeIntroCover';
import HomeIntroDescription from "./components/HomeIntroDescription";
import HomeIntroSearch from "./components/HomeIntroSearch";
import "./styles.css";

class HomeIntro extends React.Component {
  render() {
    return (
      <div class="home-intro flex-center">
        <HomeIntroCover />
        <HomeIntroDescription />
        <HomeIntroSearch />
      </div>
    );
  }
}

export default HomeIntro;