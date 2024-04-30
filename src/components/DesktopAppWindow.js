import React from "react";
import './DesktopAppWindow.css';
import PongIframeComponent from "./PongGame";

function DesktopAppWindow () {

    return(
        <div id="desktop-app-container">
            <div id="topbar">                
                <img className="topbarButtons" id="minimize" src="MinimizeWindow.png" />
                <img className="topbarButtons" id="restreDown" src="RestoreDownWindow.png" />
                <img className="topbarButtons" id="close" src="CloseWindow.png" />
            </div>
            <div id="app-canvas">
                <PongIframeComponent/>
            </div>
        </div>
    );    

}

export default DesktopAppWindow;