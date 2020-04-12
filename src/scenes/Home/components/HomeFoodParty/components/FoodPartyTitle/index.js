import React from "react";
import SectionTitle from "../../../../../../components/SectionTitle";
import API from "../../../../../../services/api";
import convertToPersianDigits from "../../../../../../services/tools/convertToPersianDigits";
import "./styles.css";

class FoodPartyTitle extends React.Component {
  render() {
    const remainingSeconds = this.props.remainingSeconds;
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
