import React from "react";
import "./FoodRecognition.css";

const FoodRecognition = ({ imageUrl, ingredients }) => {
    return (
        <div className="center w-80">
            <div className="w-70">
                <img
                    className="ma5"
                    src={imageUrl}
                    alt=""
                    width="500"
                    height="auto"
                />
            </div>
            <div className="w-30">
                <ul>
                    <li className="firstLi">
                        <h3>{"Ingredient"}</h3>
                        <h3>{"Probability"}</h3>
                    </li>
                    {ingredients.map((ingredient, i) => {
                        return (
                            <li className="ingredientLi">
                                <span> {ingredient.name} </span>
                                <span>{ingredient.value.toFixed(2)}</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FoodRecognition;
