import React from "react";

function Fruits(props) {
    const fruit = props.match.params.fruit;
    return (
        <div>
            <h1>{fruit}</h1>
        </div>
    )
}
export default Fruits;