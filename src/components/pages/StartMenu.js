import './StartMenu.css'

const StartMenu = ( {loadLockScreen} ) => {

    // Handle Power Off / Logout button click
    const handlePowerOffClick = () => {
        loadLockScreen();
    };

    return(
    <div>
        <div id="start-menu">
            <div id="os-label">                
                <p id="os-label-text">NootNoot OS</p>                
                <img id="profile-button" src='profPic.webp' />
                <img id="settings-button" src='settingsIcon.png' />
                <img 
                    id="power-button" 
                    src='powerIcon.png' 
                    onClick={handlePowerOffClick}                    
                />
            </div>
        </div>                
    </div>
    );
};

export default StartMenu;