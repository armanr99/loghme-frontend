import React from "react";
import Cart from "../Cart";
import Modal from "react-bootstrap/Modal";

class LoghmeModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShow}>shit</button>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          centerd={true}
          style={{ marginTop: "60px", minWidth: "20px" }}
          size="sm"
        >
          <Cart />
        </Modal>
      </div>
    );
  }
}

export default LoghmeModal;
