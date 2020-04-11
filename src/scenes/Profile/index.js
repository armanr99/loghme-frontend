import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileInfo from "./components/ProfileInfo";
import ProfileTabs from "./components/ProfileTabs";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <ProfileInfo />
          <ProfileTabs />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Profile;
