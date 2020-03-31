import React, { Component } from "react";
import "../containers/App.css";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../components/FaceRecognition";
import Particles from "react-particles-js";
import Clarifai from "clarifai";

const particlesOption = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const app = new Clarifai.App({
  apiKey: "3f0a97adc18b4d7d94e5092cb137a29f"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: ""
    };
  }

  onInputChange = event => {
    this.setState({input: event.target.value});
  };

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
        },
        function(error) {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
