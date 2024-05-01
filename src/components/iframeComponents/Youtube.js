import React from "react";
import './Youtube.css';

const YoutubeIframeComponent = () => {
    return (
        <div className="youtube-iframe-container">
            {/* <iframe id="youtube-iframe"
                src="https://www.youtube.com/@nikhilbagul7189/videos" // Change this to the URL you want to embed
                width="1200" // Set the width to 1280
                height="720" // Set the height to 720
                frameBorder="0" // Removes the border around the iframe
                allowFullScreen // Allows the iframe to go fullscreen
            >
            </iframe> */}

            <iframe 
                width="1280" 
                height="720" 
                src="https://www.youtube.com/embed/videoseries?si=-a9T03kGc4y4k6gm&amp;list=PLiqVjlE5mUmF3f5X5nF6atgcGYVzs06mD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </div>
    );
};

export default YoutubeIframeComponent;

