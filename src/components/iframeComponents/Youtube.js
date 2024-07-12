import React from "react";
import './Youtube.css';

const YoutubeIframeComponent = () => {
    return (
        <div className="youtube-iframe-container">
            <iframe 
                id="iframe"                
                src="https://www.youtube.com/embed/videoseries?si=-a9T03kGc4y4k6gm&amp;list=PLiqVjlE5mUmF3f5X5nF6atgcGYVzs06mD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
            >
            </iframe>
        </div>
    );
};

export default YoutubeIframeComponent;