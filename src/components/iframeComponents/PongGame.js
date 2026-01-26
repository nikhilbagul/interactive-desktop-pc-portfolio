import React from "react";
import './PongGame.css';

const PongIframeComponent = () => {
    return (
        <div className="pong-iframe-container">
            <iframe id="pong-iframe"
                title="pong-game"
                src="https://pong-unity-clone.vercel.app/" // Change this to the URL you want to embed
                width="1280" // Set the width to 1280
                height="720" // Set the height to 720
                frameBorder="0" // Removes the border around the iframe
                allowFullScreen // Allows the iframe to go fullscreen
            >
            </iframe>
        </div>
    );
};

export default PongIframeComponent;