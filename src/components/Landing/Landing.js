import React from "react";
import './Landing.css';
import Typewriter from 'typewriter-effect';





const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">Can You Type ...</h1>
                <div className="typewriter">
                    <Typewriter
                        options={{
                            strings: ['FAST?', 'CORRECT?', 'QUICK?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Landing; 