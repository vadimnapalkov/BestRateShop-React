import React, { Component } from "react";
import { connect } from "react-redux";

class Fuetures extends Component {
  render() {
    return (
      <div>
        <h1>Fuetures</h1>
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
)(Fuetures);
