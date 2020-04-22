import React from "react";


const Rank = ({user}) => {
    return (
        <div>
            <p className="f3">
                {"Welcome"} {user.name} {"your entries are"} {user.entries}
            </p>
        </div>
    );
};

export default Rank;
