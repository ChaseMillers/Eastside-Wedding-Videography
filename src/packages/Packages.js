import React, { useEffect } from 'react';
import Layout from "../Layout/Layout"
import { Link } from "react-router-dom";
import "./Packages.css"
import FadeIn from 'react-fade-in';
const Packages = () =>{

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <Layout>
            <FadeIn>
            <div className="packages-container">
            <h1>Packages</h1>
            <div className="img-banner">
                        <img
                            src="https://i.imgur.com/1r8eH1w.jpg"
                            alt="bride looking down smileing"
                        />
                    </div>
            <h2 className="every-package">Every package includes:</h2>
            <ul>
                <li>Consultation before the wedding.</li>
                <li>Full day of filming from multiple camera angles. Including Ceremony and Reception events.</li>
                <li>Cinematic highlight film.</li>
                <li>3 DVD Copies, USB Copy and Digital download.</li>
                <li>Your video, hosted online to share your special day.</li>
            </ul>
                    <div className="packages">

                        <div className="package one">
                            <h2>Elopement Package</h2>

                            <div className="contents">
                            <span className="bonus">(3-5 minutes Long)</span>
                            <p className="line-height">Full ceremony.</p>
                            <p className="line-height">Multiple camera angles.</p>
                            <p className="line-height">Ceremony</p>
                            <p className="line-height">3 DVDs, USB and digital copy.</p>
                            </div>
                                <div className="starting-at">
                            <p>Starting at</p>
                                <h3>$1000</h3>
                            </div>
                        </div>

                    <div className="package two">
                    <h2>Standard Package</h2>
                    <Link to="/ourWork">
                    <p className="title-bonus">Cinematic Highlight Film.</p>
                    </Link>
                    <span className="bonus">(5-7 minutes Long)</span>
                    <p className="line-height">Full day of coverage.</p>
                    <p className="line-height">Multiple camera angles.</p>
                    <p className="line-height">Ceremony and Reception events.</p>
                    <p className="line-height">3 DVDs, USB and digital copy.</p>
                    <p className="starting-at">Starting at</p>
                    <h3>$1500</h3>
                </div>

                <div className="package three">
                    <h2>Deluxe Package</h2>
                    <Link to="/ourWork">
                        <p className="title-bonus">Documentary Film.</p>
                        </Link>
                        <span className="bonus">(25-30 minutes Long)</span>
                        <p className="line-height">Full day of coverage.</p>
                        <p className="line-height">Multiple camera angles.</p>
                        <p className="line-height">Ceremony and Reception events.</p>
                        <p className="line-height">3 DVDs, USB and digital copy.</p>
                    <p className="starting-at">Starting at</p>
                    <h3>$2500</h3>
                </div>
                </div>
               
                <div className="package-btn-container">
                    <Link
                        className="packages-btn"
                        to="/contact">
                        Contact Us
                    </Link>
                </div>
                    <section className="upgrades">
 
            <h1 className="add-ons-title">Upgrade Options</h1>
            <div className="add-ons">
                            <div className="add-on zero">
                                <h2 className="every-package">Extra Minutes</h2>
                                <p>Extra minutes you can purchase for any video.</p>
                                <h3>$100 Per Minute</h3>
                            </div>
                            <div className="add-on one">
                    <h2 className="every-package">Social Media Trailer</h2>
                    <p>A 60 second highlight trailer of your Wedding Day, 
                    perfect for sharing on Social Media.</p>
                    <h3>$200</h3>
                </div>
                <div className="add-on two">
                    <h2 className="every-package">Rehersal Dinner</h2>
                    <p>Coverage at your pre-wedding dinner, ensures that speeches, toasts, 
                    and memories that happen before your wedding day will be remembered forever.</p>
                    <h3>$300</h3>
                </div>
                <div className="add-on three">
                    <h2 className="every-package">Love Story</h2>
                    <p>Edit includes 1 interview session where you tell your love story to the camera, 
                    and a couples session to capture supplemental footage for the edit. 
                    Ideal for playing at your Pre-Wedding Dinner. </p>
                    <h3>$300</h3>
                </div>
                <div className="add-on four">
                    <h2 className="every-package">Home Video Edit</h2>
                    <p> An un edited montage of ALL of the footage we shot from 
                    the entire day. This all delivered separately from your 
                    Cinematic Highlight Film.</p>
                    <h3>$500</h3>
                </div>
            </div>
            </section>
                </div>
            </FadeIn>
        </Layout>)
}
export default Packages
