import React, { useState } from "react";
import "./VideoPlayer.css"

const VideoPlayer = () => {
    const video = (light, videoURL) =>(
        light && 
            <iframe 
                src={videoURL} 
                frameborder="0" 
                allow="autoplay; fullscreen" 
                allowfullscreen>
            </iframe>
    );

    const OurWorkVideo = ({videoURL,imgURL}) =>{
        const [light, setLight] = useState(true);
        return(
            <div className="vimeo-container">
                {light && 
                <div className="video-preload" onClick={()=>{setLight(false)}}>
                    <span class="playButton">►</span>
                    <img className="light-photo" src={imgURL}/>
                </div>}
                {video(!light, videoURL)}
            </div>
        )
    }

    const HomeVideo = ({videoURL,imgURL}) =>{
        const [light, setLight] = useState(true);
        return(
            <div className="home-vimeo-container">
                {light && 
                <div className="video-preload" onClick={()=>{setLight(false)}}>
                    <span class="playButton">►</span>
                    <img className="home-light-photo" src={imgURL}/>
                </div>}
                {video(!light, videoURL)}
            </div>
        )
    }

    return {
        OurWorkVideo,
        HomeVideo
    };
};

export default VideoPlayer;