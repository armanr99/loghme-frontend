import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

class SectionTitle extends React.Component {
  render() {
    return (
      <div
        className={
          "section-title-container" +
          (this.props.className ? ` ${this.props.className}` : "")
        }
      >
        <span className="section-title">{this.props.title}</span>
        {this.props.children}
      </div>
    );
  }
}

export default SectionTitle;

SectionTitle.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.object
}
