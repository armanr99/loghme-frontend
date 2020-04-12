import React from "react";
import "./styles.css";
import OrderCard from "./components/OrderCard";
import { connect } from "react-redux";
import mapStateToProps from "../../../../../../services/redux/configs/userStateToProps";

class OrdersTab extends React.Component {
  render() {
    const orders = this.props.user.orders;
    const orderCards = orders.map((order, index) => (
      <OrderCard order={order} index={index + 1} key={order.id} />
    ));

    return (
      <div className="profile-tab orders-tab">
        <div className="profile-orders-container flex-center flex-col">
          {orderCards}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(OrdersTab);
