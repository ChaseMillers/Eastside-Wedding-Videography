import React, { useState } from 'react';
import "./Packages.css"
const Packages = () =>{

    return(
        <div className="packages-container">
            <h1 className="title">Packages</h1>
            <div className="packages">
                <div className="package 1">
                    <h2>#1</h2>
                    <ul className="package-list">
                        <li className="bonus">5 - 7 minute film</li>
                        <li>Full Ceremony Edit</li>
                        <li>Full Reception Edit</li>
                        <li>3 DVD Copies</li>
                        <li>USB Copy </li>
                    </ul>
                    <h3>$800</h3>
                </div>

                <div className="package 2">
                    <h2>#2</h2>
                    <ul>
                        <li className="bonus">7 - 10 minute film</li>
                        <li>Full Ceremony Edit</li>
                        <li>Full Reception Edit</li>
                        <li>3 DVD Copies</li>
                        <li>USB Copy </li>
                    </ul>
                    <h3>$1000</h3>
                </div>

                <div className="package 2">
                    <h2>#3</h2>
                    <ul>
                        <li className="bonus">25 - 30 minute film</li>
                        <li>Full Ceremony Edit</li>
                        <li>Full Reception Edit</li>
                        <li>3 DVD Copies</li>
                        <li>USB Copy </li>
                    </ul>
                    <h3>$1500</h3>
                </div>
            </div>

            <h1 className="add-ons-title">Add-ons</h1>
            <div className="add-ons">
                <div className="add-on 1">
                    <div className="add-on-inline">
                    <h2>Social Media Trailer</h2>
                    <h3>$200</h3>
                    </div>
                    <div className="view"><p>View Details</p></div>
                    <p>A 60 second highlight trailer of your Wedding Day, 
                    perfect for sharing on Social Media.</p>
                </div>
                <div className="add-on 2">
                    <div className="add-on-inline">
                    <h2>Rehersal Dinner</h2>
                    <h3>$300</h3>
                    </div>
                    <div className="view"><p>View Details</p></div>
                    <p>Coverage at your pre-wedding dinner, ensures that speeches, toasts, 
                    and memories that happen before your wedding day will be remembered forever.</p>
                </div>
                <div className="add-on 3">
                    <div className="add-on-inline">
                    <h2>Love Story</h2>
                    <h3>$300</h3>
                    </div>
                    <div className="view"><p>View Details</p></div>
                    <p>Edit includes 1 interview session where you tell your love story to the camera, 
                    and a couples session to capture supplemental footage for the edit. 
                    Ideal for playing at your Pre-Wedding Dinner.
                    </p>
                </div>
                <div className="add-on 4">
                    <div className="add-on-inline">
                    <h2>Home Video Edit</h2>
                    <h3>$500</h3>
                    </div>
                    <p>
                    An un edited montage of ALL of the footage we shot from the entire day. 
                    This all delivered separately from your final Wedding Film.</p>
                </div>
                </div>
        </div>
)}
export default Packages