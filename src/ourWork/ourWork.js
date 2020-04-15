import React, { useEffect } from "react";
import Layout from "../Layout/Layout"
import ReactPlayer from 'react-player'
import "./ourWork.css"

const ourWork = () => {

    return (
        <Layout>
            <div className="portfolio-container">
                <section className="highlights">
                    <h1 className="title">Highlights</h1>
                    <div className="portfolio">
                            <ReactPlayer
                            url="https://vimeo.com/381476056"
                            className='highlight-player'
                            light
                            controls
                            playing
                            width="100%"
                            height='200px'
                            />
                            <ReactPlayer
                            url="https://vimeo.com/381475474"
                            className='highlight-player'
                            light='https://i.imgur.com/AghAPJ9.jpg'
                            controls
                            playing
                            width="100%"
                            height='200px'
                            />
                            <ReactPlayer
                            url="https://vimeo.com/381475965"
                            className='highlight-player'
                            light='https://i.imgur.com/sdNucKC.jpg'
                            controls
                            playing
                            width="100%"
                            height='200px'
                            />
                    </div>
                </section>
        </div>
        </Layout>
    );
};

export default ourWork;