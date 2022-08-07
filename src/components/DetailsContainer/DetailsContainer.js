import React from "react";
import './DetailsContainer.css'


const DetailsContainer = ({ cardName, cardValue }) => {
    return (
        <div className="detail-container">
            <div className="card-name">{cardName}</div>
            <div className="card-value">{cardValue}</div>
        </div>
    )
}

export default DetailsContainer;