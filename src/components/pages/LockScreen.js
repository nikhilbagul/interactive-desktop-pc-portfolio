import React from 'react';
import StartButton from '../StartButton';
import ClockWidget from '../ClockWidget';
import './LockScreen.css';

const LockScreen = ( {loadDesktopScreen} ) => {

    return (
        <>
            <div className= "hero-container-lockScreen">
                <div className="bg-image"></div>                
                <div className="username">Nikhil Bagul</div>
                <StartButton loadDesktopScreen = {loadDesktopScreen} />
            </div>
            <ClockWidget />
        </>
    );
}

export default LockScreen;