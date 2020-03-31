import React, { Component } from "react";

class Navigation extends Component {
  render() {
    const { onRouteChange, isSignIn, isInRegistration } = this.props;
    if (isSignIn) {
      return (
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            className="f3 link dim black underline pa3 pointer"
            onClick={() => onRouteChange("signIn")}
          >
            Sign Out
          </p>
        </nav>
      );
    } else if (isInRegistration) {
      return (
        <nav style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            className="f3 link dim black underline pa3 pointer"
            onClick={() => onRouteChange("signIn")}
          >
            Sign In
          </p>
        </nav>
      );
    } else {
        return (<div className="pa1"></div>);
    }
  }
}

export default Navigation;
