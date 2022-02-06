import React, { useEffect } from "react";
import Layout from "../Layout/Layout"
import "./ourWork.css"
import Testimonials from "../testimonials/Testimonials"
import VideoPlayer from "../videoPlayer/VideoPlayer"
import FadeIn from 'react-fade-in';

const OurWork = () => {
    const {
        QuoteJacobAndrea,
        QuoteAdamClara,
        Brynn,
    } = Testimonials();
    const {
        OurWorkVideo
    } =VideoPlayer()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) // only runs once on page load

    return (
        <Layout>
            <FadeIn>
            <div className="portfolio-container" >
                    <h1 className="title">Our Work</h1>
                <section>
                    <h2 className="title">Cinematic Highlight Films</h2>

                    <div className="portfolio">

                        <OurWorkVideo
                            imgURL="photos/brynn.jpg"
                            videoURL="https://player.vimeo.com/video/620516443?autoplay=1"
                        />
                        <Brynn />

                        <OurWorkVideo
                            imgURL="https://imgur.com/O6zPhlo.jpg"
                            videoURL="https://player.vimeo.com/video/448812775?autoplay=1"
                        />
                        <QuoteJacobAndrea />

                        <OurWorkVideo 
                        imgURL="https://i.imgur.com/0XJfFmm.jpg"
                        videoURL="https://player.vimeo.com/video/381476056?autoplay=1"
                        />
                        <QuoteAdamClara />


                    </div>
                    </section>
                    <section className="teaser-section">
                    <h2 className="title">One-Minute Teaser Films</h2>
                    <p className="teaser-text">This is a 60 second highlight teaser of your wedding, 
                        perfect for sharing your special day with friends and family on social media.</p>
                        <div className="tease-films">
                            <div className="tease">
                                <OurWorkVideo 
                                imgURL="https://i.imgur.com/ZMC5hYs.jpg"
                                videoURL="https://player.vimeo.com/video/381476132?autoplay=1"
                                />
                                <p className="name">Nathan & Acacia </p>
                            </div>
                            <div className="tease">
                                <OurWorkVideo 
                                    imgURL="https://i.imgur.com/E4V4Vpu.jpg"
                                    videoURL="https://player.vimeo.com/video/381476165?autoplay=1"
                                />
                                <p className="name">Adam & Clara </p>
                            </div>
                        </div>
                </section>
                </div>
            </FadeIn>
        </Layout>
    );
};

export default OurWork;
