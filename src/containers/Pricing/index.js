import React, { Component } from "react";
import { connect } from "react-redux";

class Pricing extends Component {
  render() {
    return (
      <div>
        <h1>Pricing</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pricing);
