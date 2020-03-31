import React, { Component } from "react";
import "./ImageLinkForm.css";

class ImageLinkForm extends Component {
  render() {
    const { onInputChange, onButtonSubmit } = this.props;

    return (
      <div>
        <p className="f3">
          {"This Magic Brain will detect faces in your pictures, Git it a try"}
        </p>
        <div className="center">
          <div className="center pa4 br3 shadow-5 form">
            <input
              type="text"
              className="f4 pa2 w-70 center"
              onChange={onInputChange}
            />
            <button
              className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
              onClick={onButtonSubmit}
            >
              Detect
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
