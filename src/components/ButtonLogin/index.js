import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import LoginModal from "../LoginModal";
import SignUpModal from "../SignUpModal";

class ButtonLogin extends Component {
  state = {
    showModalLogin: false,
    showModalSignup: false
  };

  handleLoginClose = () => {
    this.setState({ showModalLogin: false });
  };

  handleLoginShow = () => {
    this.setState({ showModalLogin: true });
  };
  handleSignUpShow = () => {
    this.setState({ showModalSignup: true });
  };

  handleSignUpClose = () => {
    this.setState({ showModalSignup: false });
  };
  render() {
    const { showModalLogin, showModalSignup } = this.state;
    const { user, onLoginUser, onRegisterUser } = this.props;
    return (
      <div>
        <button
          variant="primary"
          type="button"
          className="btn btn-primary"
          onClick={this.handleLoginShow}
        >
          Login
        </button>

        <Modal
          dialogClassName="logreg-forms"
          show={showModalLogin}
          onHide={this.handleLoginClose}
        >
          <LoginModal
            onHide={this.handleLoginClose}
            onSignUp={this.handleSignUpShow}
            user={user}
            LoginUser={onLoginUser}
          />
        </Modal>

        <button
          variant="primary"
          type="button"
          className="btn btn-outline-success btn-lg ml-3"
          onClick={this.handleSignUpShow}
        >
          Sign up
        </button>
        <Modal
          dialogClassName="logreg-forms"
          show={showModalSignup}
          onHide={this.handleSignUpClose}
        >
          <SignUpModal
            onHide={this.handleSignUpClose}
            onLogin={this.handleLoginShow}
            user={user}
            RegisterUser={onRegisterUser}
          />
        </Modal>
      </div>
    );
  }
}

export default ButtonLogin;
