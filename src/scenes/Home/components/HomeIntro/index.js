import React from "react";
import HomeIntroCover from "./components/HomeIntroCover";
import HomeIntroDescription from "./components/HomeIntroDescription";
import HomeIntroSearch from "./components/HomeIntroSearch";
import "./styles.css";

class HomeIntro extends React.Component {
  render() {
    return (
      <div className="home-intro flex-center">
        <HomeIntroCover />
        <HomeIntroDescription />
        <HomeIntroSearch handleSearch={this.props.handleSearch}/>
      </div>
    );
  }
}

export default HomeIntro;
