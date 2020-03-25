import React, { Component } from 'react';
import '../containers/App.css';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo/Logo';
import Rank from '../components/Rank';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';

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

class App extends Component {

  render() {
    return (
      <div className="App">
        <Particles className="particles" params={particlesOption} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
