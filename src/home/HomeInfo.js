import React, { useEffect, Suspense, lazy } from "react";
import "./Home.css"
import Testimonials from "../testimonials/Testimonials"
import Contacts from "../contact/Contact"
import FadeIn from 'react-fade-in';
import { Link } from "react-router-dom";
import VideoPlayer from "../videoPlayer/VideoPlayer"
const Profile = lazy(() =>
    import("../profile/Profile")
);

const HomeInfo = () => {
    const {
        quoteOne,
    } = Testimonials();
    const {
        Contact
    } = Contacts();
    const {
        HomeVideo,
    } = VideoPlayer();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <FadeIn>
        <div className="home-info-container">
            <section className="caption-one">
                    <div className="message">
                        <h1>HELPING YOU REMEMBER EVERY MOMENT.</h1>
                        <p> 
                            We’ll capture your unique story, creating a 
                            priceless keepsake allowing you to treasure the memory forever.  
                        </p>
                    </div>
                    
                </section>
                <FadeIn>
                <section >
                    <HomeVideo 
                            imgURL="https://imgur.com/O6zPhlo.jpg"
                            videoURL="https://player.vimeo.com/video/448812775?autoplay=1"
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
                    </FadeIn>
                <Suspense fallback={<div>Loading...</div>}>
                    <Profile />
                  
                    <div className="img-banner">
                        <img 
                            src="https://i.imgur.com/kUULilJ.jpg"
                            alt="flower girls walking down aisle"
                        />
                    </div>
                   
                    {quoteOne()}
                    {Contact()}
                </Suspense>
            </div>
            </FadeIn>
    )
}

export default HomeInfo
