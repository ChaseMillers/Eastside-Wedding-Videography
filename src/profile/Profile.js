import React from "react";
import "./Profile.css"

const Profile = () =>(
    <div className="profile-container">
        <div className="profile">
        <div className="img-title-container">
            <div className="profile-pic">
            <img 
            src="https://i.imgur.com/Q9hwDxN.png" 
            alt="profile shot of owner"/>
            </div>
            <h3>Eastside Wedding Videography</h3>
        </div>
        <div className="profile-text">
                <p>
                    When building the business I knew everything had to be premium from start to finish, 
                    that&rsquo;s always been our focus since day one. We know your special day is of the utmost 
                    importance, and we work our hardest to build and preserve your trust every step of the way. 
                    We strive to have the best customer satisfaction and product in the market.
                    Give us a call! 
                    We would love to hear from you.
            </p>
            <p className="quoter">- Greg Miller, founder of Eastside Wedding Videography.</p>
        </div>
    </div>
</div>
)

export default Profile
