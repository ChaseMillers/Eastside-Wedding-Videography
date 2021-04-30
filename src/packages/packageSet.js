import React from 'react';
import { Link } from "react-router-dom";
import "./Packages.css"


    const PackageSet = () => {
        return (
            <div className="packages-container">
                <h2 className="every-package">Every Package Includes</h2>
                <div className="icons">
                    <div className="row-one">
                        <div className="icon-div">
                            <img
                                className="icon"
                                src="photos/chat.png"
                                alt="Consulation icon"
                            />
                            <p>Consultation</p>
                        </div>

                        <div className="icon-div">
                        <img
                            className="icon"
                            src="photos/share.png"
                            alt="Online share Icon"
                        />
                            <p>Video Hosted <br/>
                            Online</p>
                        </div>

                        <div className="icon-div">
                            <img
                                className="icon"
                                src="photos/real.png"
                                alt="Real Icon"
                            />
                            <p>Cinematic Highlight<br/>
                            Film</p>
                        </div>
                    </div>

                    <div className="row-two">
                        <div className="icon-div">
                            <img
                                className="icon"
                                src="photos/camera.png"
                                alt="Camera Icon"
                            />
                            <p>Multiple Camera <br/> 
                            Angles</p>
                        </div>
                        <div className="icon-div">
                            <img
                                className="icon"
                                src="photos/microphone.png"
                                alt="Microphone Icon"
                            />
                            <p>Professional Live <br/>
                            Audio</p>
                        </div>

                        <div className="icon-div">
                            <img
                                className="icon"
                                src="photos/present.png"
                                alt="Present Icon"
                            />
                            <p>Physical and <br/>
                            Digital Copies</p>
                        </div>
                    </div>
                </div>

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
                            <p className="lite">Extra minutes you can purchase for any video.</p>
                            <h3>$100 Per Minute</h3>
                        </div>
                        <div className="add-on one">
                            <h2 className="every-package">Social Media Trailer</h2>
                            <p className="lite">A 60 second highlight trailer of your wedding day,
                    perfect for sharing on social media.</p>
                            <h3>$200</h3>
                        </div>
                        <div className="add-on two">
                            <h2 className="every-package">Rehersal Dinner</h2>
                            <p className="lite">Coverage at your pre-wedding dinner, ensures that speeches, toasts,
                    and memories that happen before your wedding day will be remembered forever.</p>
                            <h3>$300</h3>
                        </div>
                        <div className="add-on three">
                            <h2 className="every-package">Love Story</h2>
                            <p className="lite">Edit includes one interview session where you tell your love story to the camera,
                            and a couples session to capture supplemental footage for the edit.
                    Ideal for playing at your Pre-Wedding Dinner. </p>
                            <h3>$300</h3>
                        </div>
                        <div className="add-on four">
                            <h2 className="every-package">Home Video Edit</h2>
                            <p className="lite"> An un-edited montage of ALL the footage we shot from
                            the entire day. This all delivered separately from your
                    Cinematic Highlight Film.</p>
                            <h3>$500</h3>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

export default PackageSet
