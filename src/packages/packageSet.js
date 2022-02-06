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
                                src="photos/icons/chat.png"
                                alt="Consulation icon"
                            />
                            <p>Consultation</p>
                        </div>

                        <div className="icon-div">
                        <img
                            className="icon"
                            src="photos/icons/social.png"
                            alt="Online share Icon"
                        />
                            <p>Video Hosted <br/>
                            Online</p>
                        </div>

                        <div className="icon-div">
                            <img
                                className="icon"
                                src="photos/icons/cut.png"
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
                                src="photos/icons/camera.png"
                                alt="Camera Icon"
                            />
                            <p>Multiple Camera <br/> 
                            Angles</p>
                        </div>
                        <div className="icon-div">
                            <img
                                className="icon"
                                src="photos/icons/microphone.png"
                                alt="Microphone Icon"
                            />
                            <p>Professional Live <br/>
                            Audio</p>
                        </div>

                        <div className="icon-div">
                            <img
                                className="icon"
                                src="photos/icons/present.png"
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
                        <div className="add-on">
                            <img
                                className="card"
                                src="photos/cards/media.png"
                                alt="social media"
                            />
                            <img
                                className="card"
                                src="photos/cards/dinner.png"
                                alt="dinner icon"
                            />
                            <img
                                className="card"
                                src="photos/cards/love.png"
                                alt="love icon"
                            />
                        </div>
                        <div className="add-on">
                            <img
                                className="card"
                                src="photos/cards/minute.png"
                                alt="social media"
                            />
                            <img
                                className="card"
                                src="photos/cards/everything.png"
                                alt="dinner icon"
                            />
                             <img
                                className="card"
                                src="photos/cards/edit.png"
                                alt="Ceremony edit icon"
                            />
                        </div>
                    </div>
                </section>
            </div>
        )
    }

export default PackageSet
