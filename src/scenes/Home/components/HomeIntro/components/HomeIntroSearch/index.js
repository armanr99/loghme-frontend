import React from "react";
import "./styles.css";

class HomeIntroSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: "",
      restaurantName: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // TODO: Use General Inputs 
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div class="container home-search">
        <form class="home-search-form row justify-content-around align-items-center">
          <div class="col-sm-9 search-text-inputs flex justify-content-around align-items-center">
            <input
              type="text"
              name="foodName"
              placeholder="نام غذا"
              class="loghme-input-text"
              value={this.state.foodName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="restaurantName"
              placeholder="نام رستوران"
              class="loghme-input-text"
              value={this.state.restaurantName}
              onChange={this.handleInputChange}
            />
          </div>
          <div class="col-sm-3 search-submit-input">
            <input type="submit" value="جست‌و‌جو" />
          </div>
        </form>
      </div>
    );
  }
}

export default HomeIntroSearch;
