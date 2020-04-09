import React from "react";
import "./styles.css";

class HeaderInfo extends React.Component {
  render() {
    return (
      <li>
        <ul>
          <li className="flex-center">
            <a href="/exit" className="header-exit flex-center">
              خروج
            </a>
          </li>
          <li className="flex-center">
            <a href="./profile.html" className="flex-center">
              حساب کاربری
            </a>
          </li>
          <li className="header-cart flex-center">
            <a href="/cart" className="flex-center">
              <span className="cart-counter flex-center">۳</span>
              <i className="flaticon-smart-cart"></i>
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

export default HeaderInfo;
