import React, { useEffect, useState } from "react";
import './DesktopAppWindow.css';
import PongIframeComponent from "./PongGame";

function DesktopAppWindow ({ appToRender, isAppActive, onAppClosedCallback }) {    
    
    const [showPongApp, setPongAppToActive] = useState(false);   

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
        
    }, [isAppActive]);


    const onCloseWindowClicked = () => {
        onAppClosedCallback(appToRender);
    }    

    return(
        <div>
            {   
                isAppActive && 
                <div id="desktop-app-container">
                <div id="topbar">                
                    <img className="topbarButtons" id="minimize" src="MinimizeWindow.png" />
                    <img className="topbarButtons" id="restreDown" src="RestoreDownWindow.png" />
                    <img className="topbarButtons" id="close" src="CloseWindow.png" onClick={onCloseWindowClicked} />
                </div>
                <div id="app-canvas">
                    {showPongApp && <PongIframeComponent/>}
                </div>
            </div>
            }
        </div>        
    );    

}

export default DesktopAppWindow;