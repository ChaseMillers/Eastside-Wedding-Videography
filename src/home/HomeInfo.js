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
        QuoteOne,
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
                        <span className="lite">
                        <p> 
                            We’ll capture your unique story, creating a 
                            priceless keepsake allowing you to treasure the memory forever.  
                        </p>
                        </span>
                    </div>
                    
                </section>
                <FadeIn>
                <section >
                    <HomeVideo 
                            imgURL="https://imgur.com/O6zPhlo.jpg"
                            videoURL="https://player.vimeo.com/video/448812775?autoplay=1"
                    />
                      
                    <div className="our-work">
                        <div className="home-link">
                            <Link className="button-work one" to="/ourwork">
                                <h2>Our Work</h2>
                                <div className="img-holder">
                                    <img 
                                    src="https://imgur.com/jgquN5x.jpg"
                                    alt="Bride and Groom" />
                                </div>
                            </Link>
                        </div>
                        <div className="home-link">
                            <Link className="button-work two" to="/packages">
                                <h2>Packages</h2>
                                <div className="img-holder">
                                    <img src="https://i.imgur.com/clnDaMA.jpg"
                                    alt="Wedding cake"/>
                                </div>
                            </Link>
                        </div>
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
                   
                    <QuoteOne/>}
                    <div className="contact-holder">
                    {Contact()}
                    </div>
                </Suspense>
            </div>
            </FadeIn>
    )
}

export default HomeInfo
