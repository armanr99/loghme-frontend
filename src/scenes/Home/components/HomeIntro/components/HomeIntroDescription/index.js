import React from "react";
import logo from "../../../../../../assets/images/logo.png";
import "./styles.css";

class HomeIntroDescription extends React.Component {
  render() {
    return (
      <div class="home-intro-description flex flex-col justify-content-around align-items-center">
        <img src={logo} alt="Logo" />
        <p>اولین و بزرگترین وب‌سایت سفارش آنلاین غذا در دانشگاه تهران</p>
      </div>
    );
  }
}

export default HomeIntroDescription;
