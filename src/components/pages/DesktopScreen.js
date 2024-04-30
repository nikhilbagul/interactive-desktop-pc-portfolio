import React, { useCallback, useEffect, useState } from "react";
import './DesktopScreen.css'
import PongIframeComponent from "../PongGame";
import DesktopAppWindow from "../DesktopAppWindow";

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

    const onIconDoubleClickHandler = () => {
        console.log("icon double clicked")
    };   

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
                        onDoubleClick = {onIconDoubleClickHandler}
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

                <DesktopAppWindow>                    
                    { showPongGame && <PongIframeComponent/> }              
                </DesktopAppWindow>
                
            </div>            
            <img className = "taskbar" src="WindowsTaskbar.jpg" />
        </div>
    );
};

export default DesktopScreen;

function DesktopIcon({ iconName, imageUrl, color, isActive, wasParentComponentClicked, onDoubleClick }) {
    
    //const [isHovering, setIsHovering] = useState(false);
    const [divColor, setDivColor] = useState('#ffffff00'); // Initial background color    
    const [isSelected, setIsSelected] = useState(false);
    
    console.log('comp rendered')

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
            setDivColor('#ffffff20'); // Change background color to blue on hover
    };

    const handleMouseLeave = () => {
        if (!isSelected)
            setDivColor('#ffffff00'); // Change background color to blue on hover
    };

    return (
      <div className="desktopIcon"
        id={iconName}
        style={{ backgroundColor: divColor, borderColor: divColor}}
        onClick={handleDesktopIconClick}
        onDoubleClick={onDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="iconImage" src={imageUrl} alt={`Image ${iconName}`} />
        <div className="iconText">{iconName}</div>
      </div>
    );
  }