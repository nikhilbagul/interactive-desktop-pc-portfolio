import React, { useState } from "react";
import './DesktopScreen.css'
import PongIframeComponent from "../PongGame";

function DesktopScreen () {

    // change component state when user request to open any app from desktop screen
    const [showPongGame, setDesktopScreenState] = useState(false);
    const togglePongGameContainer = () =>
    {
        setDesktopScreenState(!showPongGame);
    }


    // Handle button click event
    const handleClick = () => {
        console.log('Button clicked!  Load Pong Game');
        togglePongGameContainer();        
    };

    return (
        <div>
            <div className="bg-image"></div>            
            <div className="hero-container-desktopScreen">
                <img className = "pong-icon" src="PongIcon.png" alt="Launch Pong" onClick={handleClick}/>
                <img className = "youtube-icon" src="YoutubeIcon.png" alt="Launch Youtube" />
                <img className = "pong-icon" src="PongIcon.png" alt="Button" />

                { showPongGame && <PongIframeComponent/> }              
            </div>            
            <img className = "taskbar" src="WindowsTaskbar.jpg" />
        </div>
    );
};

export default DesktopScreen;