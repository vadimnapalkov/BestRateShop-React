import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginUser, LogoutUser } from "../../actions/UserActions";
import { browserHistory } from "react-router";
import config from "../../config/app.config";

class Login extends Component {
  state = {
    name: "",
    pass: ""
  };
  onLogin = e => {
    e.preventDefault();
    const { name, pass } = this.state;
    this.props.LoginUser({
      name: name,
      pass: pass
    });
  };
  handleChange = e => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };
  validate = () => {
    const { name, pass } = this.state;
    if (name.trim() && pass.trim()) {
      return true;
    }
    return false;
  };
  componentWillMount() {
    this.props.LogoutUser();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.name) browserHistory.push("/");
  }
  render() {
    const { name, pass } = this.state;
    const linkToOAuthVk = config.serverDomain + "/auth/vkontakte";
    return (
      <div className="body-login">
        <div className="form-login">
          <a className="form-login__register" href="/register">
            To register
          </a>
          <h1 className="form-login__headline">Login</h1>
          <p className="form-login__hint">Fill out the form below to login!</p>
          {this.props.user.error && (
            <p className="form-login__error">{this.props.user.error}</p>
          )}
          <input
            type="text"
            id="name"
            className="form-login__input"
            onChange={this.handleChange}
            value={name}
            placeholder="Username"
          />
          <input
            type="password"
            id="pass"
            className="form-login__input"
            onChange={this.handleChange}
            value={pass}
            placeholder="Password"
          />
          <input
            type="button"
            className="form-login__submit"
            disabled={!this.validate()}
            onClick={this.onLogin}
            value="Submit"
          />
          <div className="form-login__footer">
            <div className="oauth">
              <p className="oauth__haedline">Login through:</p>
              <a
                href={linkToOAuthVk}
                className="oauth__links"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <img
                  className="oauth__image"
                  src="/images/vkcom.svg"
                  alt="vk"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  LoginUser,
  LogoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
