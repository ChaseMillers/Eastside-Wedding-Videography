import React from 'react';
import "./Testimonials.css"

const Testimonials = () =>{
    
    const quoteOne = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p>
                    "We can always pull out 
                    our wedding video to watch the pure magic of sharing vows, 
                    the tear jerking toasts, and the amazing people that came to 
                    support us."
                </p>
                <p className="quoter">- Austin & Sarah </p>
            </div>
        </div>
    )
    const quoteTwo = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p>
                    "The video looks just like how we pictured our wedding day. 
                    We are so thankful to have the memories forever to look back on!"
                </p>
                <p className="quoter">- Nathan & Acacia </p>
            </div>
        </div>
    )

    const quoteAdamClara = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p>
                    "Greg did a wonderful job! He captured every detail and 
                    his editing is so thought out and well done. Was professional, 
                    on time and got the video done SO quickly! He’s got serious talent. 
                    I highly recommend this gentleman for any event!"
                </p>
                <p className="quoter">- Adam & Clara </p>
            </div>
        </div>
    )
    
    const quoteNateAcacia = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p>
                    "We are so happy we chose Greg to film our special day! 
                    He is so friendly and an excellent videographer. He captured 
                    all of our moments from the vows to the Newlywed Game, 
                    providing us with a shorter summary video as well as the long 
                    form of all the different events. He has a lot of video editing 
                    experience that made the video look just like how we pictured our 
                    wedding day. We are so thankful to have the memories forever to look back on!"
                </p>
                <p className="quoter">- Nathan & Acacia </p>
            </div>
        </div>
    )

    const quoteAustinSarah = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p>
                    "Thanks to Greg, we can always pull out 
                    our wedding video to watch the pure magic of sharing vows, 
                    the tear jerking toasts, and the amazing people that came to 
                    support us. Greg not only caught the details and wedding 
                    ceremony but also the “behind the scenes” parts that make our 
                    relationship special, he also worked alongside our photographers 
                    with no issues. We love Greg’s work and are thankful to have 
                    lasting memories of our favorite day!"
                </p>
                <p className="quoter">- Austin & Sarah </p>
            </div>
        </div>
    )

    return{
        quoteOne,
        quoteTwo,
        quoteAdamClara,
        quoteNateAcacia,
        quoteAustinSarah
    }
}

export default Testimonials