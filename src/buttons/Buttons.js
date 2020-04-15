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
                    offset={-80}
                    to="contact-anchor">
                    Contact Us
                </Link>
            </div>
        )
    }
    const contactBtn = () =>{
        return(
            <div className="btn-contact-container">
                <Link 
                    className="contact-btn"  
                    spy={true}
                    smooth={true}
                    offset={-90}
                    to="contact-anchor">
                    Contact Us
                </Link>
            </div>
        )
    }


    return {
        videoContactBtn,
        contactBtn
    }
}
export default Buttons