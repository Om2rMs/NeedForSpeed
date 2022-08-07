import React from "react";
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({
    selectedPhar,
    RemainingTimer,
    scriptStarted,
    words,
    character,
    speed,
    testInfo,
    onInputChange,
    startAgain
}) => {

    return (
        <div className="test-container">
            {RemainingTimer > 0 ? (<div className="typing-challenge-container">
                <TypingChallengeContainer
                    selectedPhar={selectedPhar}
                    RemainingTimer={RemainingTimer}
                    scriptStarted={scriptStarted}
                    words={words}
                    character={character}
                    speed={speed}
                    testInfo={testInfo}
                    onInputChange={onInputChange}

                />
            </div>) : (
                <div className="test-again">
                    <TryAgain
                        words={words}
                        character={character}
                        speed={speed}
                        startAgain={startAgain} />
                </div>
            )}
        </div>
    )
}

export default TestContainer;
