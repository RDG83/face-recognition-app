import React from "react";


const Rank = ({userName, userEntries}) => {
    return (
        <div>
            <p className="f3">
                {"Welcome"} {userName} {"your entries are"} <span>{userEntries}</span>
            </p>
        </div>
    );
};

export default Rank;
