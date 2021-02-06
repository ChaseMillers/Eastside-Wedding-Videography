import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout"
import "./Packages.css"
import FadeIn from 'react-fade-in';


const Packages = () =>{

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const Package = () => {
        return (
            Packages &&
            <div className="packages-container">
                <h2 className="every-package">Every package includes:</h2>
                <ul>
                    <li>Consultation before the wedding.</li>
                    <li>Cinematic highlight film.</li>
                    <li>Multiple camera angles.</li>
                    <li>3 DVD Copies, USB Copy and Digital download.</li>
                    <li>Your video, hosted online to share your special day.</li>
                </ul>

                <div className="packages">

                    <div className="package one">
                        <img
                            className="silver"
                            src="photos/silver.png"
                            alt="silver package"
                        />
                        <Link
                            className="package-btn"
                            to={{
                                pathname: '/contact',
                                state: { package: 'Silver Package' }
                            }}>
                            SELECT
                            </Link>
                    </div>

                    <div className="package two">
                        <img
                            className="gold"
                            src="photos/gold.png"
                            alt="silver package"
                        />
                        <Link
                            className="package-btn"
                            to={{
                                pathname: '/contact',
                                state: { package: 'Gold Package' }
                            }}>
                            SELECT
                            </Link>
                    </div>

                    <div className="package three">
                        <img
                            className="platinum"
                            src="photos/platinum.png"
                            alt="platinum package"
                        />
                        <Link
                            className="package-btn"
                            to={{
                                pathname: '/contact',
                                state: { package: 'Platinum Package' }
                            }}>
                            SELECT
                            </Link>
                    </div>

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
        )
    }

    return (
        Package && 
        <Layout>
            <FadeIn className="package-container">
                
                    <h1>Packages</h1>
                    <div className="img-banner">
                        <img
                            className="sofias-pic"
                            src="photos/sofiaPackage.jpg"
                            alt="bride looking down smiling"
                        />
                    </div>
        
                        <Package />
                   
            </FadeIn >
        </Layout>)
}
export default Packages
