import React from "react";
const name = "Robert";
const rank = 10;

const Rank = () => {
    return (
        <div>
            <p className="f3">
                {"Welcome"} {name} {"your rank is"} {rank}
            </p>
        </div>
    );
};

export default Rank;
