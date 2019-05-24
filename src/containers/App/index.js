import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  LoginUser,
  LogoutUser,
  RegisterUser,
  userSession
} from "../../actions/UserActions";
import Home from "../Home";
import Features from "../Features";
import Pricing from "../Pricing";
import Header from "../../components/Header";

class App extends Component {
  componentWillMount() {
    this.props.userSession();
  }
  render() {
    const { LogoutUser, LoginUser, RegisterUser, user } = this.props;
    return (
      <Fragment>
        <Header
          user={user}
          onLogoutUser={LogoutUser}
          onLoginUser={LoginUser}
          onRegisterUser={RegisterUser}
        />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/home/features" component={Features} />
          <Route path="/home/pricing" component={Pricing} />
          <Redirect to="/error" />
        </Switch>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = {
  userSession,
  LoginUser,
  RegisterUser,
  LogoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
