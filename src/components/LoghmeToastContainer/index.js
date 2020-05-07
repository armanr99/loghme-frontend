import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class LoghmeToastContainer extends React.Component {
  render() {
    return <ToastContainer rtl position={toast.POSITION.BOTTOM_RIGHT} />;
  }
}

export default LoghmeToastContainer;
