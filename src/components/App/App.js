import React from "react";
import { phar } from "../../data/samplePhar";
import Navbar from './../Navbar/Navbar'
import Landing from '../Landing/Landing'
import ChallengeSection from '../ChallengeSection/ChallengeSection'
import Footer from '../Footer/Footer'

import './App.css'

const totalTime = 60;
const URL = "http://metaphorpsum.com/paragraphs/1/8";
const defaultState = {
    selectedPhar: "",
    RemainingTimer: totalTime,
    scriptStarted: false,
    words: 0,
    character: 0,
    speed: 0,

    //
    testInfo: [],
}

class App extends React.Component {
    state = defaultState;
    fetchNewParagraphFallback = () => {
        const data =
            phar[
            Math.floor(Math.random() * phar.length)
            ];

        const selectedPharArr = data.split("");
        const testInfo = selectedPharArr.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });

        // Update the testInfo in state
        this.setState({
            ...defaultState,
            selectedPhar: data,
            testInfo,
        });
    };


    // fetchNewPhar = () => {
    //     fetch(URL)
    //         .then((Response) => Response.text())
    //         .then((data) => {
    //             const selectedPharArr = data.split("");
    //             const testInfo = selectedPharArr.map((selectedLetter) => {
    //                 return {
    //                     testLetter: selectedLetter,
    //                     status: "notAttempted",
    //                 };
    //             });

    //             this.setState({ ...defaultState, testInfo, selectedPhar: data })
    //         });


    // }

    componentDidMount() {
        this.fetchNewParagraphFallback();
    }

    startTimer = () => {
        this.setState({ scriptStarted: true });
        const timer = setInterval(() => {
            if (this.state.RemainingTimer > 0) {
                //calculate the speed writing
                const timeSpent = totalTime - this.state.RemainingTimer;
                const speed =
                    timeSpent > 0
                        ? (this.state.words / timeSpent) * totalTime
                        : 0;

                this.setState({
                    RemainingTimer: this.state.RemainingTimer - 1,
                    speed: parseInt(speed),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    };

    startAgain = () => this.fetchNewParagraphFallback();

    handleUserInput = (inputValue) => {
        if (!this.state.scriptStarted) this.startTimer();

        const character = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = character - 1;

        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted",
                    },
                    ...this.state.testInfo.slice(1),
                ],
                character,
                words,
            });
            return;
        }

        if (index >= this.state.selectedPhar.length) {
            this.setState({ character, words });
            return;
        }
        //Make copy of testInfo
        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedPhar.length - 1))
            testInfo[index + 1].status = "notAttempted";

        ///check for correct
        const isCorrect = inputValue[index] === testInfo[index].testLetter;
        // update the testInfo
        testInfo[index].status = isCorrect ? "correct" : "incorrect";
        //update the state
        this.setState({
            testInfo,
            words,
            character
        })



    };

    render() {
        return (
            <div className="app">
                <Navbar />
                <Landing />
                <ChallengeSection
                    selectedPhar={this.state.selectedPhar}
                    RemainingTimer={this.state.RemainingTimer}
                    scriptStarted={this.state.scriptStarted}
                    words={this.state.words}
                    character={this.state.character}
                    speed={this.state.speed}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />

                <Footer />

            </div>
        )

    }
}


export default App;