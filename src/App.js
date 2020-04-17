import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import "tachyons";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import FoodRecognition from "./components/FoodRecognition/FoodRecognition";
import Clarifai from "clarifai";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

const app = new Clarifai.App({
    apiKey: "acaa98cd20fa4ab6bec69cb4c5e3e714",
});

const particleOptions = {
    particles: {
        number: {
            value: 150,
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

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            imageUrl: "",
            ingredients: [],
            route: "signin",
        };
    }

    findIngredients = (data) => {
        const foundIngredients = data.outputs[0].data.concepts;
        return foundIngredients;
    };

    setIngredients = (list) => {
        this.setState({ ingredients: list });
    };

    onInputChange = (event) => {
        this.setState({ input: event.target.value });
    };

    onSubmit = () => {
        this.setState({ imageUrl: this.state.input });
        app.models
            .predict("bd367be194cf45149e75f01d59f77ba7", this.state.input)
            .then((response) =>
                this.setIngredients(this.findIngredients(response))
            )
            .catch((err) => console.log(err));
    };

    onRouteChange = (route) => {
        this.setState({ route: route });
    };

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particleOptions} />
                <Navigation onRouteChange={this.onRouteChange} />
                {this.state.route === "home" ? (
                    <div>
                        <Logo />
                        <Rank />
                        <ImageLinkForm
                            onInputChange={this.onInputChange}
                            onSubmit={this.onSubmit}
                        />
                        <FoodRecognition
                            imageUrl={this.state.imageUrl}
                            ingredients={this.state.ingredients}
                        />
                    </div>
                ) : this.state.route === "signin" ? (
                    <Signin onRouteChange={this.onRouteChange} />
                ) : (
                    <Register onRouteChange={this.onRouteChange}/>
                )}
            </div>
        );
    }
}

export default App;
