import React from "react";
import './AGodlikeGoodKid.css';

const AGGKIframeComponent = () => {
    return (
        <div className="aggk-iframe-container">
            <iframe id="aggk-iframe"
                src="https://a-godlike-good-kid.vercel.app/" // Change this to the URL you want to embed
                width="769" // Set the width to 1280
                height="1024" // Set the height to 720
                frameBorder="0" // Removes the border around the iframe
                allowFullScreen // Allows the iframe to go fullscreen
            >
            </iframe>
            {/* <div id="aggk-iframe"></div> */}
        </div>
    );
};

export default AGGKIframeComponent;