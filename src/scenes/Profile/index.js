import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileInfo from "./components/ProfileInfo";
import ProfileTabs from "./components/ProfileTabs";

class Profile extends React.Component {
  componentDidMount() {
    this.props.updateUser();
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <ProfileInfo user={this.props.user} />
          <ProfileTabs
            user={this.props.user}
            updateUser={this.props.updateUser}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Profile;
