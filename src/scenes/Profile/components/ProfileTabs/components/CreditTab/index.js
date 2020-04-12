import React from "react";
import { toast } from "react-toastify";
import isNumber from "../../../../../../services/tools/isNumber";
import convertToPersianDigits from "../../../../../../services/tools/convertToPersianDigits";
import convertToEnglishDigits from "../../../../../../services/tools/convertToEnglishDigits";
import { error, success } from "../../../../../../services/toastify/configs";
import API from "../../../../../../services/api";
import { connect } from "react-redux";
import mapStateToProps from "../../../../../../services/redux/configs/userStateToProps";
import "./styles.css";

class CreditTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (!isNumber(value)) return;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const amountState = this.state.amount;
    if (!amountState) {
      toast.error(error.EMPTY_FIELD);
      return;
    }

    const amount = convertToEnglishDigits(amountState);
    try {
      const response = await API.post("/wallet", { amount });
      const user = response.data;
      this.props.dispatch({ type: "SET_USER", user: user });
      toast.success(success.CHARGE);
    } catch (err) {
      toast.error(error.INTERNAL);
    }
  }

  render() {
    return (
      <div className="profile-tab credit-tab">
        <form action="/cart" className="row add-credit flex align-items-center" onSubmit={this.handleSubmit}>
          <div className="col-sm-8">
            <input
              type="text"
              name="amount"
              placeholder="میزان افزایش اعتبار"
              className="loghme-input-text "
              value={convertToPersianDigits(this.state.amount)}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="col-sm-4">
            <button
              className="loghme-button loghme-button-style add-credit-button"
              onClick={this.handleSubmit}
            >
              افزایش
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(CreditTab);