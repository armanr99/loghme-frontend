import React from "react";
import SectionTitle from "../../../../../../components/SectionTitle";
import API from "../../../../../../services/api";
import convertToPersianDigits from "../../../../../../services/tools/convertToPersianDigits";
import "./styles.css";

class FoodPartyTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingSeconds: 0,
    };
  }

  async componentDidMount() {
    const response = await API.get("foodparty/remainingSeconds");
    const remainingSeconds = response.data.remainingSeconds;
    this.setState({ remainingSeconds });

    this.timer = setInterval(() => this.decrementTime(), 1000);
  }

  decrementTime() {
    const remainingSeconds = this.state.remainingSeconds;
    const newRemainingSeconds = remainingSeconds > 0 ? remainingSeconds - 1 : 0;
    this.setState({ remainingSeconds: newRemainingSeconds });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const remainingSeconds = this.state.remainingSeconds;
    const remainingMinutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsMod = remainingSeconds % 60;

    return (
      <SectionTitle title="جشن غذا!">
        <p class="time-remaining">
          زمان باقی‌مانده: {convertToPersianDigits(remainingMinutes)}:
          {convertToPersianDigits(remainingSecondsMod)}
        </p>
      </SectionTitle>
    );
  }
}

export default FoodPartyTitle;
