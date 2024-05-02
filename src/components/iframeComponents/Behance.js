import React from "react";
import './Behance.css';

const BehanceIframeComponent = () => {
    return (
        <div className="behance-iframe-container">
            <iframe 
                width="1280" 
                height="720"
                src="https://www.behance.net/embed/project/144844513?ilo0=1"
                //src="https://www.behance.net/notobelooselyshunted" 
                //src="https://www.youtube.com/embed/videoseries?si=-a9T03kGc4y4k6gm&amp;list=PLiqVjlE5mUmF3f5X5nF6atgcGYVzs06mD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
                lazyload
                frameborder="0"
            >
            </iframe>
        </div>
    );
};

export default BehanceIframeComponent;