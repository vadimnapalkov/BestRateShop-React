import React, { Component } from "react";
import config from "../../config/app.config";
import { withRouter } from "react-router-dom";
const linkToOAuthVk = config.serverDomain + "/auth/vkontakte";

class Login extends Component {
  state = {
    inputEmail: "",
    inputPassword: ""
  };
  onLogin = e => {
    e.preventDefault();
    const { inputEmail, inputPassword } = this.state;
    this.props.LoginUser({
      email: inputEmail,
      pass: inputPassword
    });
  };
  onShowSignUp = () => {
    this.props.onHide();
    this.props.onSignUp();
  };
  onOAuthVK = e => {
    window.location.href = linkToOAuthVk;
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };
  validate = () => {
    const { inputEmail, inputPassword } = this.state;
    if (inputEmail.trim() && inputPassword.trim()) {
      return true;
    }
    return false;
  };
  render() {
    const { inputEmail, inputPassword } = this.state;
    return (
      <React.Fragment>
        <form className="form-signin" onSubmit={this.onLogin}>
          <button type="reset" className="close" onClick={this.props.onHide}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign in
          </h1>
          <div className="social-login">
            <button
              className="btn vkontakte-btn social-btn"
              type="button"
              onClick={this.onOAuthVK}
            >
              <span>
                <i className="fab fa-vk" /> Sign in with Vkontake
              </span>
            </button>
            <button className="btn google-btn social-btn" type="button">
              <span>
                <i className="fab fa-google-plus-g" /> Sign in with Google+
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center" }}> OR </p>
          {this.props.user.errorLogin && (
            <div
              className="alert alert-danger"
              style={{ textAlign: "center" }}
              role="alert"
            >
              {this.props.user.errorLogin}
            </div>
          )}
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            onChange={this.handleChange}
            value={inputEmail}
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            onChange={this.handleChange}
            value={inputPassword}
          />
          <button
            className="btn btn-success btn-block"
            disabled={!this.validate()}
            value="Submit"
            type="submit"
          >
            <i className="fas fa-sign-in-alt" /> Sign in
          </button>
          <button type="button" className="link-button">
            Forgot password?
          </button>
          <hr />
          <button
            className="btn btn-primary btn-block"
            type="button"
            id="btn-signup"
            onClick={this.onShowSignUp}
          >
            <i className="fas fa-user-plus" /> Sign up New Account
          </button>
        </form>
        <br />
      </React.Fragment>
    );
  }
}

export default withRouter(Login);
