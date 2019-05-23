import React, { Component } from "react";
import { connect } from "react-redux";
// import MyForm from "../../components/MyForm";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        {/* <MyForm /> */}
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
)(Home);
