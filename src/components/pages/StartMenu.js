import './StartMenu.css'
import { useRef } from "react"

const StartMenu = ( {loadLockScreen} ) => {

    const buttonClickAudioRef = useRef(new Audio("/sounds/clickSound02.wav"));

    // Handle Power Off / Logout button click
    const handlePowerOffClick = () => {
        loadLockScreen();

        buttonClickAudioRef.current.currentTime = 0; // restart if clicked multiple times
        buttonClickAudioRef.current.loop = false;    // ensure it does not loop
        buttonClickAudioRef.current.play();
    };

    return(
    <div>
        <div id="start-menu">
            <div id="os-label">                
                <p id="os-label-text">NootNoot OS</p>                
                <img id="profile-button" src='profPic.webp' alt='profileButtonImage'/>
                <img id="settings-button" src='settingsIcon.png' alt='settingsButtonImage'/>
                <img 
                    id="power-button" 
                    src='powerIcon.png' 
                    onClick={handlePowerOffClick} 
                    alt='powerButtonImage'
                />
            </div>
        </div>                
    </div>
    );
};

export default StartMenu;