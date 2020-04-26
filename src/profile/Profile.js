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
)

export default Profile