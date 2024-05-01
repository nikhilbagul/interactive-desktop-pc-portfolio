import React, { useCallback, useEffect, useState } from "react";
import './DesktopScreen.css'
import PongIframeComponent from "../PongGame";
import DesktopAppWindow from "../DesktopAppWindow";
import moment from 'moment';

function DesktopScreen () {

    // change component state when user request to open any app from desktop screen
    const [startButtonColor, setStartButtonColor] = useState('#000000'); // Initial background color
    const [isPongActive, setIsPongActive] = useState(false);
    const [isBlankSpaceClicked, setIsBlankSpaceClicked] = useState(false);

    const handleClick = () => {        
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
        setStartButtonColor("#F1532E");
    };

    const handleStartButtonMouseLeave = () => {
        setStartButtonColor("#000000");
    };

    const handleStartButtonClick = () => {
        setStartButtonColor("#00000055");
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
        const interval = setInterval(updateDateTime, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="bg-image"></div>            
            <div className="hero-container-desktopScreen" onClick={handleClick}>
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
            <div className = "taskbar" >
                <img 
                    id="windows-start-button" 
                    src="windowsIcon.png"
                    onMouseEnter={handleStartButtonMouseEnter}
                    onMouseLeave={handleStartButtonMouseLeave}
                    style={{ backgroundColor: startButtonColor}}
                />
                <div id="search-box" >
                    <p id="search-box-text" >Welcome back Nikhil!</p>
                </div>
                <div id="clock-widget">
                    <div id="time">{currentDateTime.time}</div>
                    <div id="date">{currentDateTime.date}</div>
                </div>
            </div>
        </div>
    );
};

export default DesktopScreen;

function DesktopIcon({ iconName, imageUrl, wasParentComponentClicked, onDoubleClick }) {
    
    //const [isHovering, setIsHovering] = useState(false);
    const [divColor, setDivColor] = useState('#ffffff00'); // Initial background color    
    const [isSelected, setIsSelected] = useState(false);    

    // Update local state when propFromParent changes    
    useEffect(() => {        
        setIsSelected(false);
    }, [wasParentComponentClicked]);

    // Update Div Color state when isSelected changes 
    useEffect(() => {
        setDivColor(isSelected ? '#ffffff54' : '#ffffff00');
    }, [isSelected]);

    // Function to handle the click event
    const handleDesktopIconClick = (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to parent
        setIsSelected(!isSelected);
    };

    const handleMouseEnter = () => {
        if (!isSelected)
            setDivColor('#ffffff20'); // Change background color 
    };

    const handleMouseLeave = () => {
        if (!isSelected)
            setDivColor('#ffffff00'); // Change background color 
    };

    const handleDoubleClick = () => {
        onDoubleClick(iconName); // Call parent callback with child name
      };

    return (
      <div className="desktopIcon"
        id={iconName}
        style={{ backgroundColor: divColor, borderColor: divColor}}
        onClick={handleDesktopIconClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="iconImage" src={imageUrl} alt={`Image ${iconName}`} />
        <div className="iconText">{iconName}</div>
      </div>
    );
  }