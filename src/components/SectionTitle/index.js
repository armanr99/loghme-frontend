import React from "react";
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
