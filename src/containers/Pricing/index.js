import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Pricing extends Component {
  render() {
    return (
      <Fragment>
        <h1>Pricing</h1>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(Pricing);
