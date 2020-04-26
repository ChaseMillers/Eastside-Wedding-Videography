import React, { useEffect, Suspense, lazy } from "react";
import "./Home.css"
import Buttons from '../buttons/Buttons'
import ReactPlayer from 'react-player'
import Testimonials from "../testimonials/Testimonials"
import Contacts from "../contact/Contact"
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout"
import VideoPlayer from "../videoPlayer/VideoPlayer"
const Profile = lazy(() =>
    import("../profile/Profile")
);

const Home = () => {
    const {
        videoContactBtn
    } = Buttons();
    const {
        quoteOne,
        quoteTwo
    } = Testimonials();
    const {
        Contact
    } = Contacts();
    const {
        HomeVideo
    } = VideoPlayer();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <Layout>
            <div className="home-container">
                <section>
                    {videoContactBtn()}
                    <ReactPlayer
                    url="/videos/demoSC.mp4"
                    className='react-player'
                    playing
                    preload="true"
                    muted
                    loop
                    width='100%'
                    height='100%'
                    />
                    <div className="message">
                        <h1>HELPING YOU REMEMBER EVERY MOMENT.</h1>
                        <p> 
                            We’ll capture your unique story, creating a 
                            priceless keepsake allowing you to treasure the memory forever.  
                        </p>
                    </div>
                    {quoteTwo()}
                </section>

                <section >
                    <HomeVideo 
                        imgURL="https://i.imgur.com/XMDvwwW.jpg"
                        videoURL="https://player.vimeo.com/video/381476056?autoplay=1"
                    />
                     
                    <div className="our-work">
                        <Link className="home-link" to="/ourwork">
                            <div className="button-work one">
                                <h2>Our Work</h2>
                                <div className="img-holder">
                                    <img 
                                    src="https://imgur.com/jgquN5x.jpg"
                                    alt="Bride and Groom" />
                                </div>
                            </div>
                        </Link>
                        <Link className="home-link" to="/packages">
                            <div className="button-work two">
                                <h2>Packages</h2>
                                <div className="img-holder">
                                    <img src="https://i.imgur.com/clnDaMA.jpg"
                                    alt="Wedding cake"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>
                <Suspense fallback={<div>Loading...</div>}>
                    <Profile />
                    {quoteOne()}
                    <div className="img-banner">
                        <img 
                            src="https://i.imgur.com/kUULilJ.jpg"
                            alt="flower girls walking down aisle"
                        />
                    </div>
                    {Contact()}
                </Suspense>
            </div>
        </Layout>
    )
}

export default Home