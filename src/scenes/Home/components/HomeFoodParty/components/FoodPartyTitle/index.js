import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../../../../components/SectionTitle";
import convertToPersianDigits from "../../../../../../services/tools/convertToPersianDigits";
import "./styles.css";

class FoodPartyTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };

    this.decrementTime = this.decrementTime.bind(this);
  }

  componentDidMount() {
    this.setState({ counter: this.props.remainingSeconds });
    this.timer = setInterval(() => this.decrementTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  decrementTime() {
    const counter = this.state.counter;
    const newCounter = counter > 0 ? counter - 1 : 0;
    this.setState({ counter: newCounter });
  }

  render() {
    const remainingSeconds = this.state.counter;
    const remainingMinutes = Math.floor(remainingSeconds / 60);
    const remainingSecondsMod = remainingSeconds % 60;

    return (
      <SectionTitle title="جشن غذا!">
        <p className="time-remaining">
          زمان باقی‌مانده: {convertToPersianDigits(remainingMinutes)}:
          {convertToPersianDigits(remainingSecondsMod)}
        </p>
      </SectionTitle>
    );
  }
}

export default FoodPartyTitle;

FoodPartyTitle.propTypes = {
  remainingSeconds: PropTypes.number.isRequired,
};
