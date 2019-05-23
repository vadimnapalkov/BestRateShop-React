import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import config from "../../config/app.config";
const linkToOAuthVk = config.serverDomain + "/auth/vkontakte";

class Register extends Component {
  state = {
    full_name: "",
    email: "",
    pass: "",
    repeatPass: "",
    validPass: true
  };
  onRegister = e => {
    e.preventDefault();
    const { full_name, email, pass } = this.state;
    this.props.RegisterUser({
      full_name: full_name,
      email: email,
      pass: pass
    });
  };
  onShowLogin = () => {
    this.props.onHide();
    this.props.onLogin();
  };
  onOAuthVK = () => {
    window.location.href = linkToOAuthVk;
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
    if (id === "repeatPass" || id === "pass") {
      if (this.validatePassword(id, value)) {
        this.setState({ validPass: true });
      } else {
        this.setState({ validPass: false });
      }
    }
  };
  validatePassword = (id, value) => {
    let { pass, repeatPass } = this.state;
    if (id === "repeatPass") {
      repeatPass = value;
    }
    if (id === "pass") {
      pass = value;
    }
    return pass === repeatPass;
  };
  validate = () => {
    const { full_name, email, pass } = this.state;
    if (
      full_name.trim() &&
      email.trim() &&
      pass.trim() &&
      this.validatePassword()
    ) {
      return true;
    }
    return false;
  };
  render() {
    const { full_name, email, pass, repeatPass, validPass } = this.state;
    return (
      <React.Fragment>
        <form className="form-signup" onSubmit={this.onRegister}>
          <button type="reset" className="close" onClick={this.props.onHide}>
            <span aria-hidden="true">&times;</span>
          </button>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign up
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
          <p style={{ textAlign: "center" }}>OR</p>
          {this.props.user.errorRegister && (
            <div
              className="alert alert-danger"
              style={{ textAlign: "center" }}
              role="alert"
            >
              {this.props.user.errorRegister}
            </div>
          )}

          <input
            type="text"
            id="full_name"
            className="form-control"
            placeholder="Full name"
            required=""
            autoFocus=""
            onChange={this.handleChange}
            value={full_name}
          />
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            required
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            id="pass"
            className="form-control"
            placeholder="Password"
            required
            autoFocus=""
            onChange={this.handleChange}
            value={pass}
          />
          {!validPass && (
            <p style={{ color: "red", marginBottom: "3px" }}>
              Passwords do not match!
            </p>
          )}
          <input
            type="password"
            id="repeatPass"
            className="form-control"
            placeholder="Repeat Password"
            required
            autoFocus=""
            onChange={this.handleChange}
            value={repeatPass}
          />

          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={!this.validate()}
          >
            <i className="fas fa-user-plus" /> Sign Up
          </button>
          <button onClick={this.onShowLogin} className="link-button">
            <i className="fas fa-angle-left" /> Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default withRouter(Register);
