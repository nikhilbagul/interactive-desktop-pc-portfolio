import React, { useEffect, useState } from "react";
import './DesktopIcon.css';

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
};

export default DesktopIcon;