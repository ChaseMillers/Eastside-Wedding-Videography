import React from 'react';
import "./Buttons.css"
import { Link, animateScroll as scroll } from 'react-scroll';

const Buttons = () =>{
    const videoContactBtn = () =>{
        return(
            <div className="btn-video-container">
                <Link 
                    className="video-btn"  
                    spy={true}
                    smooth={true}
                    offset={-75}
                    to="contact-anchor">
                    Contact Us
                </Link>
            </div>
        )
    }
   
    return {
        videoContactBtn,
    }
}
export default Buttons