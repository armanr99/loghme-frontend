import React from "react";
import MenuCard from "./components";

class Menu extends React.Component {
  render() {
    return (
      <div class="flex-wrap">
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
