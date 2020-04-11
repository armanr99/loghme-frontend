import React from "react";
import convertToPersianDigits from "../../../../services/tools/convertToPersianDigits";
import "./styles.css";

class ProfileInfo extends React.Component {
  render() {
    return (
      <div className="container-fluid profile-info-container flex align-items-center">
        <div className="container profile-info">
          <div className="row">
            <div className="col-sm-6 profile-name flex justify-content-start align-items-center">
              <i className="glyph-icon flaticon-account"></i>
              <span>
                {this.props.user.firstName} {this.props.user.lastName}
              </span>
            </div>
            <div className="col-sm-6 profile-description-container flex justify-content-end align-items-center">
              <div className="profile-description flex flex-col justify-content-center align-items-start">
                <div className="description-container flex-center">
                  <i className="glyph-icon flaticon-phone"></i>
                  <span className="phoneNumberSpan">
                    {convertToPersianDigits(this.props.user.phoneNumber)}
                  </span>
                </div>
                <div className="description-container flex-center">
                  <i className="glyph-icon flaticon-mail"></i>
                  <span>{this.props.user.email}</span>
                </div>
                <div className="description-container flex-center">
                  <i className="glyph-icon flaticon-card"></i>
                  <span>
                    {convertToPersianDigits(this.props.user.credit)} تومان
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
