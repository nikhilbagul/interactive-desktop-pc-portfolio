import React from 'react';
import './StartButton.css';

const StartButton = () => {

        // Handle button click event
        const handleClick = () => {
            console.log('Button clicked');
        };

        return (
            <div className="button-container">
                <button className="button-div" onClick={handleClick}>
                    Login
                </button>
            </div>
        );
};

export default StartButton;