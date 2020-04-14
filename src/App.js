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
            ingredients: {},
        };
    }

    findIngredients = (data) => {
        const foundIngredients = data.outputs[0].data.concepts;
        const ingredientList = document.getElementById("firstIngredient");
        foundIngredients.map(item => {
            let node = document.createElement("LI")
            let textnode = document.createTextNode(item.name)
            node.appendChild(textnode)
            ingredientList.appendChild(node)

        })
    };

    onInputChange = (event) => {
        this.setState({ input: event.target.value });
    };

    onSubmit = () => {
        this.setState({ imageUrl: this.state.input });
        app.models
            .predict("bd367be194cf45149e75f01d59f77ba7", this.state.input)
            .then((response) => this.findIngredients(response))
            .then((data) => this.setState({ ingredients: data }))
            .catch((err) => console.log(err));
    };

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particleOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onSubmit={this.onSubmit}
                />
                <FoodRecognition imageUrl={this.state.imageUrl} />
            </div>
        );
    }
}

export default App;
