import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import './TypingChallenge.css'


const TypingChallenge = ({
    RemainingTimer,
    scriptStarted,
    testInfo,
    onInputChange
}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{RemainingTimer >= 10 ? RemainingTimer : `0${RemainingTimer}`}</p>
                <p className="timer-text">
                    {!scriptStarted && "Start Typing To Start The Test"}
                </p>
            </div>

            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-phar">
                        {/* {selectedPhar} */}
                        {testInfo.map((L, index) => {
                            return (
                                <TestLetter
                                    key={index}
                                    L={L}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className="textarea-right">
                    <textarea
                        onChange={(e) => onInputChange(e.target.value)}
                        className="textarea"
                        placeholder="Start typing Here">

                    </textarea>
                </div>

            </div>

        </div>

    )

}


export default TypingChallenge;