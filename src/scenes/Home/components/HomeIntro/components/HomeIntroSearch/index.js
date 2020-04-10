import React from "react";
import "./styles.css";

class HomeIntroSearch extends React.Component {
  render() {
    return (
      <div class="container home-search">
        <form
          action="/search"
          class="home-search-form row justify-content-around align-items-center"
        >
          <div class="col-sm-9 search-text-inputs flex justify-content-around align-items-center">
            <input
              type="text"
              name="food_name"
              placeholder="نام غذا"
              class="loghme-input-text"
            />
            <input
              type="text"
              name="restaurant_name"
              placeholder="نام رستوران"
              class="loghme-input-text"
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
