import React, { Component } from "react";
import "./FaceRecognition.css";

class FaceRecognition extends Component {
  createBox = boxes => {
    return boxes.map(box => {
      return (
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            bottom: box.bottomRow,
            right: box.rightCol,
            left: box.leftCol
          }}
        ></div>
      );
    });
  };

  render() {
    const { imageURL, boxes } = this.props;
    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img
            id="inputImage"
            src={imageURL}
            alt=""
            width="500px"
            height="auto"
          ></img>
          {this.createBox(boxes)}
        </div>
      </div>
    );
  }
}

export default FaceRecognition;
