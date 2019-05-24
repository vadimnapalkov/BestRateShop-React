import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h1>Home</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(Home);
