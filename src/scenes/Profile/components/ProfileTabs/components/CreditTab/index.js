import React from "react";
import "./styles.css";

class CreditTab extends React.Component {
  render() {
    return (
      <div className="profile-tab credit-tab">
        <form action="/cart" className="row add-credit flex align-items-center">
          <div className="col-sm-8">
            <input
              type="text"
              name="credit"
              placeholder="میزان افزایش اعتبار"
              className="loghme-input-text "
            />
          </div>
          <div className="col-sm-4">
            <input
              type="submit"
              value="افزایش"
              className="loghme-button loghme-button-style"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreditTab;
