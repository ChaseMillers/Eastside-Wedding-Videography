import React, { useEffect } from "react";
import "./Home.css"
import Buttons from '../buttons/Buttons'
import ReactPlayer from 'react-player'
import Testimonials from "../testimonials/Testimonials"
import Contacts from "../contact/Contact"
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout"
import VideoPlayer from "../videoPlayer/VideoPlayer"

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
                    url="/videos/demoC.mp4"
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
                        imgURL="./pics/C&A.webp"
                        videoURL="https://player.vimeo.com/video/381476056?autoplay=1"
                    />
                     
                    <div className="our-work">
                        <Link className="home-link" to="/ourwork">
                            <div className="button-work one">
                                <h2>Our Work</h2>
                                <div className="img-holder">
                                    <img 
                                    src="./pics/me.webp"
                                    alt="Bride and Groom" />
                                </div>
                            </div>
                        </Link>
                        <Link className="home-link" to="/packages">
                            <div className="button-work two">
                                <h2>Packages</h2>
                                <div className="img-holder">
                                    <img src="./pics/cake.webp"
                                    alt="Wedding cake"/>
                                </div>
                            </div>
                        </Link>
                    </div>
                </section>

                <section>
                    <div className="profile-container">
                        <div className="profile">
                            <div className="img-title-container">
                                <div className="profile-pic">
                                <img 
                                src="./pics/greg.png" 
                                alt="profile shot of owner"/>
                                </div>
                                <h3>Eastside Wedding Videography</h3>
                            </div>
                            <div className="profile-text">
                                <p>
                                Growing up with brothers, we filmed many home videos 
                                and I grew to love videography. As I obtained more equipment 
                                and honed my craft, I offered to film my brother's wedding In the 
                                summer of 2016. After that experience, I knew what my business 
                                would be all about; working hard to preserve your memory the 
                                way you want to remember it, and Eastside Wedding Videography 
                                was born. You will love our films, commitment to quality is 
                                the cornerstone of our work. Give us a call! 
                                We would love to hear from you.
                                </p>
                                <p className="quoter">- Greg Miller, founder of Eastside Wedding Videography.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {quoteOne()}
                <div className="img-banner">
                    <img 
                    src="./pics/girls.webp"
                    alt="flower girls walking down aisle"
                    />
                </div>
                {Contact()}
            </div>
        </Layout>
    )
}

export default Home