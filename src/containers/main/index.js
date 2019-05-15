import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { userSession } from "../../actions/UserActions";
import User from "../../components/User";

class Main extends Component {
  componentWillMount() {
    this.props.userSession();
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.user.name) browserHistory.push("/login");
  }
  render() {
    return (
      <div>
        <h1>Здарова {this.props.user.name}</h1>
        <User />
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
  userSession
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
