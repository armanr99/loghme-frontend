import React from "react";
import HomeIntroCover from './components/HomeIntroCover';
import "./styles.css";

class HomeIntro extends React.Component {
  render() {
    return (
      <div class="home-intro flex-center">
        <HomeIntroCover />
      </div>
    );
  }
}

export default HomeIntro;