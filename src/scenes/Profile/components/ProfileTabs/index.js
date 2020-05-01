import React from "react";
import CreditTab from "./components/CreditTab";
import OrdersTab from "./components/OrdersTab";
import "./styles.css";

class ProfileTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: "credit",
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(event) {
    const selectedTab = event.target.value;
    this.setState({ selectedTab });
  }

  render() {
    return (
      <div className="container profile-content flex-center">
        <input
          className="radio"
          id="credit-tab-select"
          type="radio"
          value="credit"
          checked={this.state.selectedTab === "credit"}
          onChange={this.handleTabChange}
        />
        <input
          className="radio"
          id="orders-tab-select"
          type="radio"
          value="orders"
          checked={this.state.selectedTab === "orders"}
          onChange={this.handleTabChange}
        />
        <div className="profile-options flex justify-content-between align-items-center">
          <label
            className="orders-tab-label flex-center"
            htmlFor="orders-tab-select"
          >
            سفارش‌ها
          </label>
          <hr className="vertical-dash" />
          <label
            className="credit-tab-label flex-center"
            htmlFor="credit-tab-select"
          >
            افزایش اعتبار
          </label>
        </div>
        <CreditTab />
        <OrdersTab />
      </div>
    );
  }
}

export default ProfileTabs;
