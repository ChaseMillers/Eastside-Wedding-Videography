import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout"
import ReactPlayer from 'react-player'
import "./VideoPlayer.css"
import Testimonials from "../testimonials/Testimonials"

const VideoPlayer = ({
    videoURL,
    imgURL
}) => {
    
    const [light, setLight] = useState(true);

    const videoHandle = () =>{
        setLight(false)
    } 

    const video = (light) =>(
        light && 
            <iframe 
                src={videoURL} 
                frameborder="0" 
                allow="autoplay; fullscreen" 
                allowfullscreen>
            </iframe>
    );

    return (
        <div className="vimeo-container">
            {light && 
            <div className="video-preload" onClick={()=>{videoHandle()}}>
            <span class="playButton">►</span>
                <img className="light-photo" src={imgURL}/>
            </div>}
            {video(!light)}
        </div>
    );
};

export default VideoPlayer;