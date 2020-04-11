import React from "react";
import SectionTitle from "../../../../../../components/SectionTitle";

class RestaurantInfoTitle extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6"></div>
          <SectionTitle className="col-lg-8 col-md-6 " title="منوی غذا" />
        </div>
      </div>
    );
  }
}

export default RestaurantInfoTitle;
