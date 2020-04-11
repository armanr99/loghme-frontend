import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileInfo from "./components/ProfileInfo";
import "./styles.css";

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="profile">
          <ProfileInfo />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Profile;
