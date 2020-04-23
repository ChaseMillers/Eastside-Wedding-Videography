import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout"
import ReactPlayer from 'react-player'
import "./ourWork.css"
import Testimonials from "../testimonials/Testimonials"
import VideoPlayer from "../videoPlayer/VideoPlayer"

const OurWork = () => {
    const {
        quoteAdamClara,
        quoteNateAcacia,
        quoteAustinSarah
    } = Testimonials();
    
    const [light, setLight] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const videoHandle = () =>{
        setLight(true)
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
        <Layout>
            <div className="portfolio-container">
                    <h1 className="title">Our Work</h1>
                <section>
                    <h2 className="title">Cinematic Highlight Films</h2>

                    <div className="portfolio">

                        <VideoPlayer 
                        imgURL="https://i.imgur.com/0XJfFmm.jpg"
                        videoURL="https://player.vimeo.com/video/381476056?autoplay=1"
                        />
                        {quoteAdamClara()}

                        <VideoPlayer 
                        imgURL="https://i.imgur.com/EzAwSyr.jpg"
                        videoURL="https://player.vimeo.com/video/381475474?autoplay=1"
                        />
                        {quoteNateAcacia()}

                        <VideoPlayer 
                        imgURL="https://i.imgur.com/1GyrdJb.jpg"
                        videoURL="https://player.vimeo.com/video/381475965?autoplay=1"
                        />
                        {quoteAustinSarah()}

                    </div>
                </section>
                <section>
                    <h2 className="title">One-Minute Teaser Films</h2>
                    <p className="teaser-text">This is a 60 Second Highlight Teaser of your wedding, 
                        perfect for sharing your special day with friends and family on Social Media.</p>
                        <div className="portfolio">
                            <VideoPlayer 
                                imgURL="https://i.imgur.com/ZMC5hYs.jpg"
                                videoURL="https://player.vimeo.com/video/381476132?autoplay=1"
                            />
                            <p className="name">Nathan & Acacia </p>
                         
                            <VideoPlayer 
                                imgURL="https://i.imgur.com/E4V4Vpu.jpg"
                                videoURL="https://player.vimeo.com/video/381476165?autoplay=1"
                            />
                            <p className="name">Adam & Clara </p>
                            
                        </div>
                </section>
        </div>
        </Layout>
    );
};

export default OurWork;