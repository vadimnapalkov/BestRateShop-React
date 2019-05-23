import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";

class ButtonLogin extends Component {
  constructor(props, context) {
    super(props, context);

    this.LoginShow = this.LoginShow.bind(this);
    this.LoginClose = this.LoginClose.bind(this);
    this.SignUpShow = this.SignUpShow.bind(this);
    this.SignUpClose = this.SignUpClose.bind(this);

    this.state = {
      showModalLogin: false,
      showModalSignup: false
    };
  }

  LoginClose() {
    this.setState({ showModalLogin: false });
  }

  LoginShow() {
    this.setState({ showModalLogin: true });
  }
  SignUpShow() {
    this.setState({ showModalSignup: true });
  }

  SignUpClose() {
    this.setState({ showModalSignup: false });
  }
  render() {
    return (
      <div>
        <button
          variant="primary"
          type="button"
          className="btn btn-primary"
          onClick={this.LoginShow}
        >
          Login
        </button>

        <Modal
          id="logreg-forms"
          show={this.state.showModalLogin}
          onHide={this.LoginClose}
        >
          <LoginModal
            onHide={this.LoginClose}
            onSignUp={this.SignUpShow}
            user={this.props.user}
            LoginUser={this.props.LoginUser}
          />
        </Modal>

        <button
          variant="primary"
          type="button"
          className="btn btn-outline-success btn-lg ml-3"
          onClick={this.SignUpShow}
        >
          Sign up
        </button>
        <Modal
          id="logreg-forms"
          show={this.state.showModalSignup}
          onHide={this.SignUpClose}
        >
          <SignUpModal
            onHide={this.SignUpClose}
            onLogin={this.LoginShow}
            user={this.props.user}
            RegisterUser={this.props.RegisterUser}
          />
        </Modal>
      </div>
    );
  }
}

export default ButtonLogin;
