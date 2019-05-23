import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { LoginUser, LogoutUser, RegisterUser } from "../../actions/UserActions";
import { userSession } from "../../actions/UserActions";
import Home from "../Home";
import Features from "../Features";
import Pricing from "../Pricing";
import Header from "../../components/Header";

class App extends Component {
  componentWillMount() {
    this.props.userSession();
  }
  render() {
    return (
      <div>
        <Header
          user={this.props.user}
          LogoutUser={this.props.LogoutUser}
          LoginUser={this.props.LoginUser}
          RegisterUser={this.props.RegisterUser}
        />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/home/features" component={Features} />
          <Route path="/home/pricing" component={Pricing} />
          <Redirect to="/error" />
        </Switch>
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
  userSession,
  LoginUser,
  RegisterUser,
  LogoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
