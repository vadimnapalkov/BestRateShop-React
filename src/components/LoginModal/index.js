import React, { Component, Fragment } from "react";
import config from "../../config/app.config";
import { withRouter } from "react-router-dom";
const linkToOAuthVk = config.serverDomain + "/auth/vkontakte";

class LoginModal extends Component {
  state = {
    email: "",
    pass: ""
  };
  handleLogin = e => {
    e.preventDefault();
    const { email, pass } = this.state;
    this.props.onLoginUser({ email, pass });
  };
  handleShowSignUp = () => {
    this.props.onHide();
    this.props.onSignUp();
  };
  handleOAuthVK = e => {
    window.location.href = linkToOAuthVk;
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };
  validate = () => {
    const { email, pass } = this.state;
    return email.trim() && pass.trim();
  };
  render() {
    const { email, pass } = this.state;
    const { onHide, user } = this.props;
    return (
      <Fragment>
        <form className="form-signin" onSubmit={this.handleLogin}>
          <button type="reset" className="close" onClick={onHide}>
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
              onClick={this.handleOAuthVK}
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
          {user.errorLogin && (
            <div
              className="alert alert-danger"
              style={{ textAlign: "center" }}
              role="alert"
            >
              {user.errorLogin}
            </div>
          )}
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            id="pass"
            className="form-control"
            placeholder="Password"
            required=""
            onChange={this.handleChange}
            value={pass}
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
            onClick={this.handleShowSignUp}
          >
            <i className="fas fa-user-plus" /> Sign up New Account
          </button>
        </form>
        <br />
      </Fragment>
    );
  }
}

export default withRouter(LoginModal);
