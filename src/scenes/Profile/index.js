import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileInfo from "./components/ProfileInfo";
import ProfileTabs from "./components/ProfileTabs";
import Loading from "../../components/Loading";
import { setUser } from "../../services/redux/actions/userActions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    await this.props.dispatch(setUser());
    this.setState({ loading: false });
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.loading ? (
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

export default connect()(Profile);
