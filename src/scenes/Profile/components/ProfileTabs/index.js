import React from "react";
import CreditTab from "./components/CreditTab";
import OrdersTab from "./components/OrdersTab";
import "./styles.css";

class ProfileTabs extends React.Component {
  render() {
    return (
      <div className="container profile-content flex-center">
        <input
          className="radio"
          id="credit-tab-select"
          name="group"
          type="radio"
          checked
        />
        <input
          className="radio"
          id="orders-tab-select"
          name="group"
          type="radio"
        />
        <div className="profile-options flex justify-content-between align-items-center">
          <label
            className="orders-tab-label flex-center"
            for="orders-tab-select"
          >
            سفارش‌ها
          </label>
          <hr className="vertical-dash" />
          <label
            className="credit-tab-label flex-center"
            for="credit-tab-select"
          >
            افزایش اعتبار
          </label>
        </div>
        <CreditTab updateUser={this.props.updateUser} />
        <OrdersTab user={this.props.user} />
      </div>
    );
  }
}

export default ProfileTabs;
