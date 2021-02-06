import React from 'react';
import "./Buttons.css"
import { Link } from "react-router-dom";

const Buttons = () =>{
    const videoContactBtn = () =>{
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
        videoContactBtn
    }
}
export default Buttons
