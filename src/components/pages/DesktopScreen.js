import React, { useCallback, useEffect, useState } from "react";
import './DesktopScreen.css'
import PongIframeComponent from "../PongGame";

function DesktopScreen () {

    // change component state when user request to open any app from desktop screen
      


    const [showPongGame, setDesktopScreenState] = useState(false);
    const togglePongGameContainer = () =>
    {
        setDesktopScreenState(!showPongGame);
    }

    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {        
        setIsClicked(true); // Update state to indicate the parent component was clicked        
        //console.log("parent div clicked");
    };
    // Reset parentClicked prop after click
    useEffect(() => {
        setIsClicked(false);
    },[isClicked]);       

    return (
        <div>
            <div className="bg-image"></div>            
            <div className="hero-container-desktopScreen" onClick={handleClick}>
                <div className="desktopColumn">
                    <DesktopIcon
                        iconName={"Resume"}
                        imageUrl={"resumeIcon.png"}
                        color={'#ffffff00'}
                        isActive = {false}
                        wasParentComponentClicked = {isClicked}
                    />

                    <DesktopIcon
                        iconName={"Youtube"}
                        imageUrl={"youtubeIcon.png"}
                        color={'#ffffff00'}
                        isActive = {false}
                        wasParentComponentClicked = {isClicked}
                    />

                    <DesktopIcon
                        iconName={"Behance"}
                        imageUrl={"behanceIcon.png"}
                        color={'#ffffff00'}
                        isActive = {false}
                        wasParentComponentClicked = {isClicked}
                    />

                    <DesktopIcon
                        iconName={"React"}
                        imageUrl={"reactIcon.png"}
                        color={'#ffffff00'}
                        isActive = {false}
                        wasParentComponentClicked = {isClicked}
                    />
                </div>

                { showPongGame && <PongIframeComponent/> }              
            </div>            
            <img className = "taskbar" src="WindowsTaskbar.jpg" />
        </div>
    );
};

export default DesktopScreen;

function DesktopIcon({ iconName, imageUrl, color, isActive, wasParentComponentClicked}) {
    
    const [isSelected, setIsSelected] = useState(false);
    
    // const [lastSelected, setLastSelected] = useState(false);
    // const [shortcutId, setShortcutId] = useState('');
    // const [doubleClickTimerActive, setDoubleClickTimerActive] = useState(false);
    
    
    // Update local state when propFromParent changes    
    useEffect(() => {        
        //console.log(wasParentComponentClicked);
        setIsSelected(false);
    }, [wasParentComponentClicked]);

    // const getShortcutId = useCallback(() => {
    //     return iconName;
    // },[iconName]
    // );

    // useEffect(() => {
    //     setShortcutId(getShortcutId());
    // },[iconName, getShortcutId]
    // );


    // const handleClickOutside = useCallback((event) => {
    //    const targetId = event.target.id;
    //    if (targetId !== shortcutId)
    //    {
    //         setIsSelected(false);
    //    }
    //    if (!isSelected && lastSelected)
    //    {
    //         setLastSelected(false);
    //    }

    //    console.log(shortcutId);
    // },[isSelected, setIsSelected, setLastSelected, lastSelected, shortcutId]
    // );

    // Function to handle the click event
    const handleDesktopIconClick = (event) => {
        event.stopPropagation(); // Prevent event from bubbling up to parent

        // Check for double click
        // if(doubleClickTimerActive)
        // {
        //     // open associated div
        //     onOpen && onOpen();
        //     setIsSelected(false);
        //     setDoubleClickTimerActive(false);
        //     return;
        // }

        // Change the color of the div to blue when clicked        
        // Determine the background color based on the value of 'prevIsActive'
        
        setIsSelected(!isSelected);
        // setDoubleClickTimerActive(true);
        // // set double click timer active
        // setTimeout(() => {
        //     setDoubleClickTimerActive(false);
        // },300);
    };//, [doubleClickTimerActive, setIsSelected, onOpen]);

    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);

    //     return () => {
    //         document.addEventListener('mousedown', handleClickOutside);
    //     }
    // },[isSelected, handleClickOutside]);

    const divColor = isSelected ? '#ffffff54' : '#ffffff00';

    return (
      <div className="desktopIcon"
        id={iconName}
        style={{ backgroundColor: divColor, borderColor: divColor}}        
        onClick={handleDesktopIconClick}
      >
        <img className="iconImage" src={imageUrl} alt={`Image ${iconName}`} />
        <div className="iconText">{iconName}</div>
      </div>
    );
  }