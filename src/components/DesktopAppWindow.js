import React, { useEffect, useState } from "react";
import './DesktopAppWindow.css';
import PongIframeComponent from "./iframeComponents/PongGame";
import YoutubeIframeComponent from "./iframeComponents/Youtube";
import BehanceIframeComponent from "./iframeComponents/Behance";

function DesktopAppWindow ({ appToRender, isAppActive, onAppClosedCallback }) {    
    
    // Calculate initial position of the container
    useEffect(() => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const containerWidth = 1280; // Adjust as needed
        const containerHeight = 720; // Adjust as needed

        const initialX = (screenWidth - containerWidth) / 2;
        const initialY = (screenHeight - containerHeight) / 2;

        setContainerPosition({ x: initialX, y: initialY });
    }, []);

    const [showPongApp, setPongAppToActive] = useState(false);
    //const [showBehanceApp, setBehanceAppToActive] = useState(false);
    const [showYoutubeApp, setYoutubeAppToActive] = useState(false);   

    useEffect(() => {
        console.log(appToRender)       

        if(appToRender === "Pong" && isAppActive)
        {            
            setPongAppToActive(true);
        }
        else if(appToRender === "Pong" && !isAppActive)
        {            
            setPongAppToActive(false);
        }

        if(appToRender === "Youtube" && isAppActive)
        {            
            setYoutubeAppToActive(true);
        }
        else if(appToRender === "Youtube" && !isAppActive)
        {            
            setYoutubeAppToActive(false);
        }

        // if(appToRender === "Behance" && isAppActive)
        // {            
        //     setBehanceAppToActive(true);
        // }
        // else if(appToRender === "Behance" && !isAppActive)
        // {            
        //     setBehanceAppToActive(false);
        // }
        
    }, [isAppActive]);


    const onCloseWindowClicked = () => {
        onAppClosedCallback(appToRender);
    }    

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [containerPosition, setContainerPosition] = useState({ x: 0, y: 0 });

  const startDrag = (event) => {
    setIsDragging(true);
    setDragOffset({
      x: event.clientX - containerPosition.x,
      y: event.clientY - containerPosition.y
    });
  };

  const onDrag = (event) => {
    if (isDragging) {
      const newContainerPosition = {
        x: event.clientX - dragOffset.x,
        y: event.clientY - dragOffset.y
      };
      setContainerPosition(newContainerPosition);
    }
  };

  const stopDrag = () => {
    setIsDragging(false);
  };


    return(
        <div>
            {   
                isAppActive && 
                <div id="desktop-app-container"
                    style={{ top: containerPosition.y, left: containerPosition.x }}
                >
                <div id="topbar">
                    <div id="topbar-hitbox" 
                        onMouseDown={startDrag}                        
                        onMouseMove={onDrag}
                        onMouseUp={stopDrag}
                    />
                    <img className="topbarButtons" id="minimize" src="MinimizeWindow.png" />
                    <img className="topbarButtons" id="restoreDown" src="RestoreDownWindow.png" />
                    <img className="topbarButtons" id="close" src="CloseWindow.png" onClick={onCloseWindowClicked} />
                </div>
                <div id="app-canvas">
                    {showPongApp && <PongIframeComponent/>}
                    {showYoutubeApp && <YoutubeIframeComponent/>}                    
                </div>
            </div>
            }
        </div>        
    );    

}

export default DesktopAppWindow;