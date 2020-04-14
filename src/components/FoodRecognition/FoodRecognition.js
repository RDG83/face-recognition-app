import React from "react";
import "./FoodRecognition.css";

const FoodRecognition = ({ imageUrl, ingredients }) => {
    return (
        <div className="center">
            <div>
                <img
                    className="ma5"
                    src={imageUrl}
                    alt=""
                    width="500"
                    height="auto"
                />
            </div>
            <div>
                <ul className="ma5 bg-washed-blue">
                    {ingredients.map((ingredient, i) => {
                        return (
                            <li>
                                {ingredient.name}
                                {ingredient.value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FoodRecognition;
