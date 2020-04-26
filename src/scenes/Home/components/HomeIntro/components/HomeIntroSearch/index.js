import React from "react";
import { toast } from "react-toastify";
import { error } from "../../../../../../services/toastify/configs";
import "./styles.css";

class HomeIntroSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodName: "",
      restaurantName: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    const foodName = this.state.foodName;
    const restaurantName = this.state.restaurantName;

    if (!foodName && !restaurantName) {
      toast.error(error.LEAST_EMPTY_FIELD);
      return;
    }

    this.props.handleSearch(restaurantName, foodName);
  }

  render() {
    return (
      <div className="container home-search">
        <form className="home-search-form row justify-content-around align-items-center">
          <div className="col-sm-9 search-text-inputs flex justify-content-around align-items-center">
            <input
              type="text"
              name="foodName"
              placeholder="نام غذا"
              className="loghme-input-text"
              value={this.state.foodName}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="restaurantName"
              placeholder="نام رستوران"
              className="loghme-input-text"
              value={this.state.restaurantName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col-sm-3 search-submit-button-container">
            <button
              className="search-submit-button"
              onClick={this.handleSubmit}
            >
              جست‌و‌جو
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default HomeIntroSearch;
