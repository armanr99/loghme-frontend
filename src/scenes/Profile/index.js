import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileInfo from "./components/ProfileInfo";
import ProfileTabs from "./components/ProfileTabs";
import Loading from "../../components/Loading";
import mapStateToProps from "../../services/redux/configs/userStateToProps";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {!this.props.user.firstName ? (
          <Loading />
        ) : (
          <main>
            <ProfileInfo />
            <ProfileTabs />
          </main>
        )}
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Profile);
