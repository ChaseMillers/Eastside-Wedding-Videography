import React, { useEffect } from "react";
import Layout from "../Layout/Layout"
import ReactPlayer from 'react-player'
import "./ourWork.css"
import Testimonials from "../testimonials/Testimonials"

const ourWork = () => {
    const {
        quoteAdamClara,
        quoteNateAcacia,
        quoteAustinSarah
    } = Testimonials();

    return (
        <Layout>
            <div className="portfolio-container">
                    <h1 className="title">Our Work</h1>
                <section>
                    <h2 className="title">Highlight Films</h2>
                    <div className="portfolio">
                            <ReactPlayer
                                url="https://vimeo.com/381476056"
                                className='highlight-player'
                                light="https://i.imgur.com/0XJfFmm.jpg"
                                controls
                                playing
                                width="100%"
                                height='300px'
                            />
                            {quoteAdamClara()}

                            <ReactPlayer
                                url="https://vimeo.com/381475474"
                                className='highlight-player'
                                light='https://i.imgur.com/EzAwSyr.jpg'
                                controls
                                playing
                                width="100%"
                                height='300px'
                            />
                            {quoteNateAcacia()}

                            <ReactPlayer
                                url="https://vimeo.com/381475965"
                                className='highlight-player'
                                light='https://i.imgur.com/1GyrdJb.jpg'
                                controls
                                playing
                                width="100%"
                                height='300px'
                            />
                            {quoteAustinSarah()}
                    </div>
                </section>
                <section>
                    <h2 className="title">One-Minute Teaser Films</h2>
                    <p className="teaser-text">This is a 60 Second Highlight Teaser of your wedding, 
                        perfect for sharing your special day with on Social Media.</p>
                        <div className="portfolio">
                            <ReactPlayer
                                url="https://vimeo.com/381476132"
                                className='highlight-player'
                                light="https://i.imgur.com/ZMC5hYs.jpg"
                                controls
                                playing
                                width="100%"
                                height='300px'
                            />
                            <p className="name">Nathan & Acacia </p>
                         
                            <ReactPlayer
                                url="https://vimeo.com/381476165"
                                className='highlight-player'
                                light="https://i.imgur.com/cK4wVCO.jpg"
                                controls
                                playing
                                width="100%"
                                height='300px'
                            />
                            <p className="name">Adam & Clara </p>
                            
                        </div>
                </section>
        </div>
        </Layout>
    );
};

export default ourWork;