import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileInfo from "./components/ProfileInfo";
import ProfileTabs from "./components/ProfileTabs";
import API from "../../services/api";

class Profile extends React.Component {
  async componentDidMount() {
    const response = await API.get("/user");
    const user = response.data;
    this.props.updateUser(user);
  }

  render() {
    return (
      <div>
        <Header user={this.props.user} updateUser={this.props.updateUser} />
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
