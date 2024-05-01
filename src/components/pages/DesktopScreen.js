import React, { useCallback, useEffect, useState } from "react";
import './DesktopScreen.css'
import DesktopAppWindow from "../DesktopAppWindow";
import moment from 'moment';
import StartMenu from "./StartMenu";
import DesktopIcon from "./DesktopIcon";
import TaskbarAppIcon from "../TaskbarAppIcon";

function DesktopScreen () {

    // change component state when user request to open any app from desktop screen
    const [startButtonColor, setStartButtonColor] = useState('#000000'); // Initial background color
    const [isPongActive, setIsPongActive] = useState(false);
    const [isBlankSpaceClicked, setIsBlankSpaceClicked] = useState(false);
    const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

    const handleBlankSpaceClick = () => {        
        setIsBlankSpaceClicked(true); // Update state to indicate the parent component was clicked        
        console.log("parent div clicked");        
        // Reset parentClicked prop after click
        setTimeout(() => {
            setIsBlankSpaceClicked(false); 
        }, 100);
    };   

    console.log(isPongActive);
    console.log('comp rendered');

    const onIconDoubleClickHandler = (childName) => {        
        //console.log(`Double clicked on ${childName}`);
        setIsPongActive(true);
    };   

    const closeDesktopAppWindow = (appName) => {
        setIsPongActive(false);
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
        const interval = setInterval(updateDateTime, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="bg-image"></div>            
            <div className="hero-container-desktopScreen" onClick={handleBlankSpaceClick}>
                <div className="desktopColumn">
                    <DesktopIcon
                        iconName={"Resume"}
                        imageUrl={"resumeIcon.png"}                        
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
                        iconName={"Behance"}
                        imageUrl={"behanceIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />

                    <DesktopIcon
                        iconName={"React"}
                        imageUrl={"reactIcon.png"}                        
                        wasParentComponentClicked = {isBlankSpaceClicked}
                        onDoubleClick = {onIconDoubleClickHandler}
                    />
                </div>

                <DesktopAppWindow appToRender = {"Pong"} isAppActive = {isPongActive} onAppClosedCallback={closeDesktopAppWindow}/>
                
            </div>

            {isStartMenuOpen && <StartMenu />}

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

                <TaskbarAppIcon />

                <div id="clock-widget">
                    <div id="time">{currentDateTime.time}</div>
                    <div id="date">{currentDateTime.date}</div>
                </div>
            </div>
        </div>
    );
};

export default DesktopScreen;