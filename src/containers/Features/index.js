import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Features extends Component {
  render() {
    return (
      <Fragment>
        <h1>Fuetures</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(Features);
