import React from "react";
import "./styles.css";

class SectionTitle extends React.Component {
  render() {
    return (
      <div class="section-title-container">
        <span class="section-title">{this.props.title}</span>
        {this.props.children}
      </div>
    );
  }
}

export default SectionTitle;
