import React, { useEffect, useState, useRef } from "react";
import './DesktopIcon.css';

function DesktopIcon({ iconName, imageUrl, wasParentComponentClicked, onDoubleClick, isActive }) {
    
    //const [isHovering, setIsHovering] = useState(false);
    const [divColor, setDivColor] = useState('#ffffff00'); // Initial background color    
    const [isSelected, setIsSelected] = useState(false);
    const iconClickAudioRef = useRef(new Audio("/sounds/clickSound02.wav"));    

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

        iconClickAudioRef.current.currentTime = 0; // restart if clicked multiple times
        iconClickAudioRef.current.loop = false;    // ensure it does not loop
        iconClickAudioRef.current.play();
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
        style={{ backgroundColor: divColor, borderColor: divColor, opacity: isActive ? 1 : 0.25}}
        onClick={handleDesktopIconClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img className="iconImage" src={imageUrl} alt={`Image ${iconName}`} />
        <div className="iconText">{iconName}</div>
      </div>
    );
};

export default DesktopIcon;