import React from "react";

function CardComponent(props) {
    return (
        <div className="card">
        <img src={props.image} alt={props.title} />
        <div className="card-body">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
        </div>
    );
}

export default CardComponent;