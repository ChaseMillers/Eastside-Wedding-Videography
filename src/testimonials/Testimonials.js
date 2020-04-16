import React from 'react';
import "./Testimonials.css"

const Testimonials = () =>{
    
    const quoteOne = () =>{
        return(
        <div className="test-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="test">
                <p>
                    "Eastside Wedding Videography captured our memories, 
                    and made them shine. "
                </p>
                <p className="quoter">- Chase & Sofia </p>
            </div>
        </div>
    )}
    const quoteTwo = () =>{
        return(
        <div className="test-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="test">
                <p>
                    "The video looks just like how we pictured our wedding day. 
                    We are so thankful to have the memories forever to look back on!"
                </p>
                <p className="quoter">- Nathan & Acacia </p>
            </div>
        </div>
    )}


    return{
        quoteOne,
        quoteTwo,
    }
}

export default Testimonials