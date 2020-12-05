import React, { useState } from "react";
import "./VideoPlayer.css"

const VideoPlayer = () => {
    const video = (light, videoURL) =>(
        light && 
            <iframe 
                src="https://drive.google.com/file/d/1zG-g9pZq5WX_j1T1edgr4S7jo01AkLID/preview" 
                frameborder="0" 
                allow="autoplay; fullscreen" 
                title="wedding highlight video"
                allowfullscreen>
            </iframe>
    );

    const OurWorkVideo = ({videoURL,imgURL}) =>{
        const [light, setLight] = useState(true);
        return(
            <div className="vimeo-container">
                {light && 
                <div className="video-preload" onClick={()=>{setLight(false)}}>
                    <span className="playButton">►</span>
                    <img className="light-photo" src={imgURL} alt="video thumbnail"/>
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
                    <span className="playButton">►</span>
                    <img className="home-light-photo" src={imgURL} alt="video thumbnail"/>
                </div>}
                {video(!light, videoURL)}
            </div>
        )
    }

    return {
        OurWorkVideo,
        HomeVideo,
    };
};

export default VideoPlayer;
