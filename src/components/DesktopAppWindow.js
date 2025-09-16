import React, { useEffect, useState, useRef } from "react";
import './DesktopAppWindow.css';
import PongIframeComponent from "./iframeComponents/PongGame";
import YoutubeIframeComponent from "./iframeComponents/Youtube";
import ResumeDesktopAppComponent from "./ResumeDesktopApp";
import AGGKIframeComponent from "./iframeComponents/AGodlikeGoodKid";

function DesktopAppWindow ({ appToRender, isAppActive, onAppClosedCallback }) { 
    
    const windowCloseClickAudioRef = useRef(new Audio("/sounds/clickSound02.wav"));
    
    // Calculate initial position of the container
    useEffect(() => {

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        var containerWidth = 0;
        var containerHeight = 0;
        
        if (appToRender === "Pong")
        {
            containerWidth = 1280; // Adjust as needed
            containerHeight = 720; // Adjust as needed
        }
        
        if (appToRender === "Youtube")
        {
            containerWidth = 1280; // Adjust as needed
            containerHeight = 720; // Adjust as needed
        }
        
        if (appToRender === "Resume")
        {
            containerWidth = 1280; // Adjust as needed
            containerHeight = 850; // Adjust as needed            
        }

        if (appToRender === "AGodlikeGoodKid")
        {
            containerWidth = 769; // Adjust as needed
            containerHeight = 1024; // Adjust as needed            
        }
        
        const initialX = (screenWidth - containerWidth) / 2;
        const initialY = (screenHeight - containerHeight) / 2;

        setContainerPosition({ x: initialX, y: initialY });
    }, [isAppActive]);

    const [showPongApp, setPongAppToActive] = useState(false);    
    const [showYoutubeApp, setYoutubeAppToActive] = useState(false);
    const [showResumeApp, setResumeAppToActive] = useState(false);
    const [showAGGKApp, setAGGKAppToActive] = useState(false);

    useEffect(() => {
        //console.log(appToRender)       

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

        if(appToRender === "Resume" && isAppActive)
        {            
            setResumeAppToActive(true);
            document.getElementById('desktop-app-container').style.resize = 'both';
        }
        else if(appToRender === "Resume" && !isAppActive)
        {            
            setResumeAppToActive(false);            
        }

        // if(appToRender === "AGodlikeGoodKid" && isAppActive)
        // {            
        //     setAGGKAppToActive(true);            
        // }
        // else if(appToRender === "AGodlikeGoodKid" && !isAppActive)
        // {            
        //     setAGGKAppToActive(false);            
        // }
        
    }, [isAppActive]);


    const onCloseWindowClicked = () => {
        windowCloseClickAudioRef.current.currentTime = 0; // restart if clicked multiple times
        windowCloseClickAudioRef.current.loop = false;    // ensure it does not loop
        windowCloseClickAudioRef.current.play();
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
        <>
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
                        {showResumeApp && <ResumeDesktopAppComponent />}
                        {/* {showAGGKApp && <AGGKIframeComponent />} */}
                    </div>
            </div>
            }
        </>        
    );    

}

export default DesktopAppWindow;