import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout"
import ReactPlayer from 'react-player'
import "./VideoPlayer.css"
import Testimonials from "../testimonials/Testimonials"

const VideoPlayer = ({
    video,
    img
}) => {
    
    const [light, setLight] = useState(true);

    const videoHandle = () =>{
        setLight(false)
    } 

    const adamClara = (light) =>(
        light && 
            <iframe 
                src="https://player.vimeo.com/video/381476056?autoplay=1" 
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
                <img className="light-photo" src="https://i.imgur.com/0XJfFmm.jpg"/>
            </div>}
            {adamClara(!light)}
        </div>
    );
};

export default VideoPlayer;