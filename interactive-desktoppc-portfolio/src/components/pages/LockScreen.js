import React from 'react';
import StartButton from '../StartButton';
import ClockWidget from '../ClockWidget';
import './LockScreen.css';

function LockScreen() {

    return (
        <>
            <div className= "hero-container">
                <div className="bg-image"></div>                
                <div className="username">Nikhil Bagul</div>
                <StartButton />                
            </div>
            <ClockWidget />
        </>
    );
}

export default LockScreen;

//