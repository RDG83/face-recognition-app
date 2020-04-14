import React from "react";
import './FoodRecognition.css';

const FoodRecognition = ({ imageUrl }) => {
    return (
        
        <div>
            <img
                className="ma5"
                src={imageUrl}
                alt=""
                width="500"
                height="auto"
            />
            <ul id="firstIngredient">
             
            </ul>
        </div>
    );
};

export default FoodRecognition;
