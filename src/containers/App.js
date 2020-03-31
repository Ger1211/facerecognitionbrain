import React, { Component } from "react";
import "../containers/App.css";
import Navigation from "../components/Navigation";
import SignIn from "../components/SignIn";
import Register from "../components/Register";
import Logo from "../components/Logo/Logo";
import Rank from "../components/Rank";
import ImageLinkForm from "../components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "../components/FaceRecognition/FaceRecognition";
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
      imageURL: "",
      boxes: [],
      route: "signIn",
      isSignIn: false,
      isInRegistration: false
    };
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageURL: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch(error => console.log(error));
  };

  calculateFaceLocation = data => {
    const clarifaiFace = data.outputs[0].data.regions;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    let boxes = clarifaiFace.map(region => {
      let box = {
        leftCol: region.region_info.bounding_box.left_col * width,
        rightCol: width - region.region_info.bounding_box.right_col * width,
        topRow: region.region_info.bounding_box.top_row * height,
        bottomRow: height - region.region_info.bounding_box.bottom_row * height
      };
      return box;
    });

    return boxes;
  };

  displayFaceBox = boxes => {
    this.setState({ boxes: boxes });
  };

  onRouteChange = route => {
    if (route === "signIn") {
      this.setState({ isSignIn: false });
    } else if (route === "home") {
      this.setState({ isSignIn: true });
    }

    if (route === "register") {
      this.setState({ isSignIn: false });
      this.setState({ isInRegistration: true });
    } else {
      this.setState({ isInRegistration: false });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignIn, isInRegistration, boxes, imageURL, route } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        <Navigation
          isSignIn={isSignIn}
          isInRegistration={isInRegistration}
          onRouteChange={this.onRouteChange}
        />
        {this.state.route === "home" ? (
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition boxes={boxes} imageURL={imageURL} />
          </div>
        ) : route === "signIn" ? (
          <div>
            <Logo />
            <SignIn onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <Logo />
            <Register />
          </div>
        )}
      </div>
    );
  }
}

export default App;
