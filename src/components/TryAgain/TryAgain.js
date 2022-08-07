import React from "react";
import './TryAgain.css'



const TryAgain = ({ words, character, speed, startAgain }) => {
    return (
        <div className="tryagain-container">
            <h1 className="result-header">Test Results</h1>

            <div className="result-text">
                <p>
                    <b>Words  : {words}</b>
                </p>
                <p>
                    <b>Character  : {character}</b>
                </p>
                <p>
                    <b>Word Per Minute : {speed}</b>
                </p>
            </div>

            <div>
                <button
                    onClick={() => startAgain()}
                    className="button start">
                    Re-try
                </button>
                <button
                    onClick={() => {
                        window.open(
                            "https://twitter.com/intent/tweet/FlashType",
                            "Twitter", "width=800,hight=600"

                        );
                    }}
                    className="button second">
                    Twitter
                </button>
            </div>

        </div>

    )
}


export default TryAgain;