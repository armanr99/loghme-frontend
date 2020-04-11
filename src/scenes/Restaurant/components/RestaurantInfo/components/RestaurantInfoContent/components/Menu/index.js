import React from "react";
import "./styles.css";
import MenuCard from "./components";

class Menu extends React.Component {
  render() {
    return (
      <div class="restaurant-menu-container flex-wrap">
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
        <MenuCard />
      </div>
    );
  }
}

export default Menu;
