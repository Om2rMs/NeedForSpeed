import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import './ChallengeSection.css'



const ChallengeSection = ({
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
        <div className="challenge-container">
            <h1 data-aos="fade-down" className="challenge-text">Take Speed Exam Now!</h1>
            <TestContainer
                selectedPhar={selectedPhar}
                RemainingTimer={RemainingTimer}
                scriptStarted={scriptStarted}
                words={words}
                character={character}
                speed={speed}
                testInfo={testInfo}
                onInputChange={onInputChange}
                startAgain={startAgain}
            />
        </div>
    )
}

export default ChallengeSection;