import React from 'react';
import './StartButton.css';

const StartButton = ( {loadDesktopScreen} ) => {
    
    // Handle button click event
    const handleClick = () => {
        console.log('Button clicked!  Load Desktop Screen');
        loadDesktopScreen();
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