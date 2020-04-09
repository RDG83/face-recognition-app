import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import "tachyons";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";

const particleOptions = {
    particles: {
      number: {
        value: 150
      },
        line_linked: {
            shadow: {
                enable: true,
                color: "#3CA9D1",
                blur: 5,
            },
        },
    },
};
function App() {
    return (
        <div className="App">
            <Particles className="particles" params={particleOptions} />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />
            {/*<FaceRecognition />*/}
        </div>
    );
}

export default App;
