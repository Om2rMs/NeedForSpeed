import React from "react";
import DetailsContainer from "../DetailsContainer/DetailsContainer";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({
    selectedPhar,
    RemainingTimer,
    scriptStarted,
    words,
    character,
    speed,
    testInfo,
    onInputChange
}) => {
    return (
        <div className="typing-challenge-container">
            <div className="details-container">
                <DetailsContainer cardName="Words" cardValue={words} />
                {/* character */}
                <DetailsContainer cardName="Character" cardValue={character} />

                {/* speed */}
                <DetailsContainer cardName="Word Per Minute" cardValue={speed} />
            </div>

            <div className="typewriter-container">
                <TypingChallenge
                    selectedPhar={selectedPhar}
                    RemainingTimer={RemainingTimer}
                    scriptStarted={scriptStarted}
                    testInfo={testInfo}
                    onInputChange={onInputChange}
                />
            </div>

        </div>
    );
}



export default TypingChallengeContainer;