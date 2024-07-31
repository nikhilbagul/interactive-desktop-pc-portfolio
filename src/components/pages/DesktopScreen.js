import React, { useEffect, useState } from "react";
import './DesktopScreen.css'
import DesktopAppWindow from "../DesktopAppWindow";
import moment from 'moment';
import StartMenu from "./StartMenu";
import DesktopIcon from "./DesktopIcon";
import TaskbarAppIcon from "../TaskbarAppIcon";
import WeatherWidget from "../WeatherWidget";

const DesktopScreen = ({loadLockScreen}) => {

    // change component state when user request to open any app from desktop screen
    const [startButtonColor, setStartButtonColor] = useState('#000000'); // Initial background color    
    const [isBlankSpaceClicked, setIsBlankSpaceClicked] = useState(false);
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isBehanceOpen, setIsBehanceOpen] = useState(false);
    const [isYoutubeOpen, setIsYoutubeOpen] = useState(false);
    const [isPongOpen, setIsPongOpen] = useState(false);
    const [isAGGKOpen, setIsAGGKOpen] = useState(false);
    //const [isOldPortfolioOpen, setIsOldPortfolioOpen] = useState(false);

    const handleBlankSpaceClick = () => {        
        setIsBlankSpaceClicked(true); // Update state to indicate the parent component was clicked        
        //console.log("parent div clicked");        
        // Reset parentClicked prop after click
        setTimeout(() => {
            setIsBlankSpaceClicked(false); 
        }, 100);
    };   

    //console.log('comp rendered');

    const onIconDoubleClickHandler = (appName) => {        
        //console.log(`Double clicked on ${appName}`);
        
        if(appName === "Pong")
            setIsPongOpen(true);
        if(appName === "Resume")
            setIsResumeOpen(true);
        if(appName === "Youtube")
            setIsYoutubeOpen(true);
        if(appName === "Behance")
            window.open('https://www.behance.net/notobelooselyshunted', '_blank');
        if(appName === "Github")
            window.open('https://github.com/nikhilbagul', '_blank');
        if(appName === "portfolio_deprecated")
            window.open('https://nikhilbagul.webflow.io', '_blank');
        if(appName === "AGodlikeGoodKid")
        {
            window.open('https://a-godlike-good-kid.vercel.app/', '_blank');
            //setIsAGGKOpen(true);
        }

    };   

    const closeDesktopAppWindow = (appName) => {

        if(appName === "Pong" && isPongOpen)
            setIsPongOpen(false);
        if(appName === "Resume" && isResumeOpen)
            setIsResumeOpen(false);
        if(appName === "Youtube" && isYoutubeOpen)
            setIsYoutubeOpen(false);
        if(appName === "Behance" && isBehanceOpen)
            setIsBehanceOpen(false);
        // if(appName === "AGodlikeGoodKid")
        //     setIsAGGKOpen(false);
    }

    const handleStartButtonMouseEnter = () => {
        if(!isStartMenuOpen)
            setStartButtonColor("#F1532E");
    };

    const handleStartButtonMouseLeave = () => {
        if(!isStartMenuOpen)
            setStartButtonColor("#000000");
    };

    const handleStartButtonClick = () => {
        if(!isStartMenuOpen)
        {
            setStartButtonColor("#747474");
            setIsStartMenuOpen(true);
        }
        else if(isStartMenuOpen)
        {
            setStartButtonColor("#000000");
            setIsStartMenuOpen(false);
        }
    };

    // State to store the current time, date, and day
    const [currentDateTime, setCurrentDateTime] = useState({
        time: '',
        date: '',
        day: '',
    });

    // Function to update the current date and time
    const updateDateTime = () => {
        const now = moment();
        setCurrentDateTime({
            time: now.format('h:mm A'),
            date: now.format('MMMM D, YYYY')
        });
    };

    // Use an effect to update the date and time every second
    useEffect(() => {
        const interval = setInterval(updateDateTime, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="bg-image"></div>            
            <div className="hero-container-desktopScreen" onClick={handleBlankSpaceClick}>
                <div className="appDrawer">
                    <DesktopIcon
                        iconName={"RecycleBin"}
                        imageUrl={"recycleBinIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"MyPC"}
                        imageUrl={"myPcIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Cmd"}
                        imageUrl={"cmdIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Google Chrome"}
                        imageUrl={"chromeIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Firefox"}
                        imageUrl={"firefoxIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />     

                    <DesktopIcon
                        iconName={"React"}
                        imageUrl={"reactIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />               

                    <DesktopIcon
                        iconName={"Github"}
                        imageUrl={"githubIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Pixyz"}
                        imageUrl={"pixyzIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Behance"}
                        imageUrl={"behanceIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Unity"}
                        imageUrl={"unityIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Blender"}
                        imageUrl={"blenderIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />                    

                    <DesktopIcon
                        iconName={"Visual Studio"}
                        imageUrl={"vsStudioIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Visual Studio Code"}
                        imageUrl={"vsCodeIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Unreal"}
                        imageUrl={"unrealIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Notepad++"}
                        imageUrl={"notepadPPIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"portfolio_deprecated"}
                        imageUrl={"coding.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />     

                    <DesktopIcon
                        iconName={"Steam"}
                        imageUrl={"steamIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Three JS"}
                        imageUrl={"threeJsIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Resume"}
                        imageUrl={"resumeIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Pong"}
                        imageUrl={"pongIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"Youtube"}
                        imageUrl={"youtubeIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"AGodlikeGoodKid"}
                        imageUrl={"aggkIcon.webp"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />
                    
                </div>

                <DesktopAppWindow appToRender = {"Pong"} isAppActive = {isPongOpen} onAppClosedCallback={closeDesktopAppWindow}/>
                <DesktopAppWindow appToRender = {"Youtube"} isAppActive = {isYoutubeOpen} onAppClosedCallback={closeDesktopAppWindow}/>
                <DesktopAppWindow appToRender = {"Resume"} isAppActive = {isResumeOpen} onAppClosedCallback={closeDesktopAppWindow}/>
                {/* <DesktopAppWindow appToRender = {"AGodlikeGoodKid"} isAppActive = {isAGGKOpen} onAppClosedCallback={closeDesktopAppWindow}/> */}

                {/* <DesktopAppWindow appToRender = {"Behance"} isAppActive = {isBehanceOpen} onAppClosedCallback={closeDesktopAppWindow}/> */}                  

            <div id="weather-widget">
                <WeatherWidget />
            </div>            

            </div>

            

            {isStartMenuOpen && <StartMenu loadLockScreen = {loadLockScreen} /> }

            <div className = "taskbar" >
                <img 
                    id="windows-start-button" 
                    src="windowsIcon.png"
                    onMouseEnter={handleStartButtonMouseEnter}
                    onMouseLeave={handleStartButtonMouseLeave}
                    onClick={handleStartButtonClick}
                    style={{ backgroundColor: startButtonColor}}
                />
                <div id="search-box" >
                    <p id="search-box-text" >Welcome back Nikhil!</p>
                </div>               


                {isPongOpen && <TaskbarAppIcon appName={"Pong"} imageUrl={"pongIcon.png"} isAppMaximized={true} /> }
                {isResumeOpen && <TaskbarAppIcon appName={"Resume"} imageUrl={"resumeIcon.png"} isAppMaximized={true} /> }
                {/* {isBehanceOpen && <TaskbarAppIcon appName={"Behance"} imageUrl={"behanceIcon.png"} isAppMaximized={true} /> } */}
                {isYoutubeOpen && <TaskbarAppIcon appName={"Youtube"} imageUrl={"youtubeIcon.png"} isAppMaximized={true} /> }
                {isAGGKOpen && <TaskbarAppIcon appName={"AGodlikeGoodKid"} imageUrl={"aggkIcon.webp"} isAppMaximized={true} /> }
                

                <div id="clock-widget">
                    <div id="time">{currentDateTime.time}</div>
                    <div id="date">{currentDateTime.date}</div>
                </div>
            </div>
        </div>
    );
};

export default DesktopScreen;