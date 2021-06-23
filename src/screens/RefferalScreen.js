import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class RefferalScreen extends Component {
  state = {
    isSet: false,
  };
  componentDidMount() {
    let ref = this.props.match.params.id;
    localStorage.setItem("ref", ref);
    this.setState({ isSet: true });
  }
  render() {
    if (this.state.isSet) {
      return <Redirect to="/"></Redirect>;
    } else {
      return <div></div>;
    }
  }
}

export default RefferalScreen;
