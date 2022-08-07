import React from "react";
import './TestLetter.css'


const TestLetter = ({ L }) => {

    const status = L.status;

    //the original way
    // let statusClass;
    // if (status === "correct") {
    //     statusClass = "correct"
    // } else if (status === "incorrect") {
    //     statusClass = "incorrect"
    // } else {
    //     statusClass = "notAttempted"
    // }

    ////the profesional way////
    const statusClass = {
        correct: "correct",
        incorrect: "incorrect",
        notAttempted: "notAttempted"
    }[status];

    return (
        <span className={`test-letter ${statusClass}`}>
            {L.testLetter}
        </span>
    );
}



export default TestLetter; 