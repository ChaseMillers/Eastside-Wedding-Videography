import React from 'react';
import "./Buttons.css"
import { Link } from "react-router-dom";

const Buttons = () =>{
    const VideoContactBtn = () =>{
        return(
            <div className="btn-video-container">
                <Link 
                    className="video-btn"  
                    to="/contact">
                    Contact Us
                </Link>
            </div>
        )
    }
   
    return {
        VideoContactBtn
    }
}
export default Buttons
