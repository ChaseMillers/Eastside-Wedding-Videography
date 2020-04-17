import React, { useState, useEffect } from 'react';
import Layout from "../Layout/Layout"
import { Link } from "react-router-dom";
import "./Packages.css"
const Packages = () =>{

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
    <Layout>
        <div className="packages-container">
            <h1>Packages</h1>
            <h2 className="every-package">Every package includes:</h2>
            <ul>
                <li>Consultation before the wedding.</li>
                <li>Full day of filming.</li>
                <li>Cinematic highlight film.</li>
                <li>3 DVD Copies, USB Copy and Digital download.</li>
                <li>Your video, hosted online to share your special day.</li>
            </ul>
            <div className="packages">
                <div className="package 1">
                    <h2>Basic Package</h2>
                    <Link to="/ourWork">
                    <p className="title-bonus">Cinematic Highlight Film.</p>
                    </Link>
                    <span className="bonus">(5-7 minutes Long)</span>
                    <p className="line-height">Full day of coverage.</p>
                    <p className="line-height">3 DVDs, USB and digital copy.</p>
                    <p className="starting-at">Starting at</p>
                    <h3>$800</h3>
                </div>

                <div className="package 2">
                    <h2>Standard Package</h2>
                    <Link to="/ourWork">
                    <p className="title-bonus">Cinematic Highlight Film.</p>
                    </Link>
                    <span className="bonus">(7-10 minutes Long)</span>
                    <p className="line-height">Full day of coverage.</p>
                    <p className="line-height">3 DVDs, USB and digital copy.</p>
                    <p className="starting-at">Starting at</p>
                    <h3>$1000</h3>
                </div>

                <div className="package 2">
                    <h2>Deluxe Package</h2>
                    <Link to="/ourWork">
                        <p className="title-bonus">Cinematic Highlight Film.</p>
                        </Link>
                        <span className="bonus">(25-30 minutes Long)</span>
                        <p className="line-height">Full day of coverage.</p>
                        <p className="line-height">3 DVDs, USB and digital copy.</p>
                    <p className="starting-at">Starting at</p>
                    <h3>$1500</h3>
                </div>
            </div>

            <h1 className="add-ons-title">Upgrade Options</h1>
            <div className="add-ons">
                <div className="add-on 1">
                    <h2 className="every-package">Social Media Trailer</h2>
                    <p>A 60 second highlight trailer of your Wedding Day, 
                    perfect for sharing on Social Media.</p>
                    <h3>$200</h3>
                </div>
                <div className="add-on 2">
                    <h2 className="every-package">Rehersal Dinner</h2>
                    <p>Coverage at your pre-wedding dinner, ensures that speeches, toasts, 
                    and memories that happen before your wedding day will be remembered forever.</p>
                    <h3>$300</h3>
                </div>
                <div className="add-on 3">
                    <h2 className="every-package">Love Story</h2>
                    <p>Edit includes 1 interview session where you tell your love story to the camera, 
                    and a couples session to capture supplemental footage for the edit. 
                    Ideal for playing at your Pre-Wedding Dinner. </p>
                    <h3>$300</h3>
                </div>
                <div className="add-on 4">
                    <h2 className="every-package">Home Video Edit</h2>
                    <p> An un edited montage of ALL of the footage we shot from 
                    the entire day. This all delivered separately from your 
                    Cinematic Highlight Film.</p>
                    <h3>$500</h3>
                </div>
                </div>
            </div>
        </Layout>)
}
export default Packages