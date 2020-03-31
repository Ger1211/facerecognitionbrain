import React, { Component } from "react";

class FaceRecognition extends Component {
  render() {
    const { imageURL } = this.props;
    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img src={imageURL} alt="" width="500px" height="auto"></img>
        </div>
      </div>
    );
  }
}

export default FaceRecognition;
