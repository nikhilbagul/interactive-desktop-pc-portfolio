import { useRef } from 'react';
import './StartButton.css';

const StartButton = ( {loadDesktopScreen} ) => {
    
    const buttonClickAudioRef = useRef(new Audio("/sounds/clickSound02.wav")); 

    // Handle button click event
    const handleClick = () => {
        
        buttonClickAudioRef.current.currentTime = 0; // restart if clicked multiple times
        buttonClickAudioRef.current.loop = false;    // ensure it does not loop
        buttonClickAudioRef.current.play();
        
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