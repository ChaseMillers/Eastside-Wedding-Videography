import React from "react";
import "./Footer.css";

const Footer = () => (
    <div className="footer">
    <div className='social-text'>Follow Us</div>
            <div className='contact-icons'> 
              <ul className='ul-icons'>
                <li><a className="fab fa-facebook" 
                href='https://www.facebook.com/pages/category/Event-Videographer/Eastside-Wedding-Videography-112436703596933/'
                target="_blank"
                rel="noopener noreferrer">{null}</a></li>

                <li><a className="fab fa-vimeo"
                href='https://vimeo.com/user106799482' 
                target="_blank"
                rel="noopener noreferrer">{null}</a></li>

                <li><a className="fab fa-instagram"
                href='https://www.instagram.com/eastsideweddingvideography/' 
                target="_blank"
                rel="noopener noreferrer">{null}</a></li>
              </ul>
            </div>

        © 2020 Eastside Wedding Videography. All Rights Reserved.
    </div>
)

export default Footer