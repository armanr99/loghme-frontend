import React from "react";
import HashLoader from "react-spinners/HashLoader";
import "./styles.css";

class Loading extends React.Component {
  render() {
    return (
      <div className="loading">
        <HashLoader size={70} color={"#4ecdc4"} />
      </div>
    );
  }
}

export default Loading;
