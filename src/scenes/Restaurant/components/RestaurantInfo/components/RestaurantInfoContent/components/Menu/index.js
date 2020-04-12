import React from "react";
import MenuCard from "./components";
import PropTypes from "prop-types";

class Menu extends React.Component {
  render() {
    const menu = this.props.restaurant.menu;
    const menuCards = menu.map((food) => (
      <MenuCard food={food} key={food.name} />
    ));

    return <div className="flex-wrap">{menuCards}</div>;
  }
}

export default Menu;

Menu.propTypes = {
  restaurant: PropTypes.shape({ menu: PropTypes.array.isRequired }).isRequired,
};
