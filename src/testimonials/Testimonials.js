import React from 'react';
import "./Testimonials.css"

const Testimonials = () =>{
    
    const QuoteOne = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p className="lite">
                    "We can always pull out 
                    our wedding video to watch the pure magic of sharing vows, 
                    the tear jerking toasts, and the amazing people that came to 
                    support us."
                </p>
                <p className="quoter">- Austin & Sarah </p>
            </div>
        </div>
    )
    const QuoteTwo = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p className="lite">
                    "The video looks just like how we pictured our wedding day. 
                    We are so thankful to have the memories forever to look back on!"
                </p>
                <p className="quoter">- Nathan & Acacia </p>
            </div>
        </div>
    )

    const QuoteJacobAndrea = () => (
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p className="lite">
                    "Absolutely fantastic job! The time and effort clearly shows and the amount 
                    of detail to make our day as special as possible was unprecedented! Thanks for 
                    all the hard work! We love it!"
                </p>
                <p className="quoter">- Jacob & Andrea </p>
            </div>
        </div>
    )

    const QuoteAdamClara = () => (
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p className="lite">
                    "Greg did a wonderful job! He captured every detail and 
                    his editing is so thought out and well done. Was professional, 
                    on time and got the video done SO quickly! He’s got serious talent. 
                    I highly recommend this gentleman for any event!"
                </p>
                <p className="quoter">- Adam & Clara </p>
            </div>
        </div>
    )
    
    const QuoteNateAcacia = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p className="lite">
                    "We are so happy we chose Greg to film our special day! 
                    He is so friendly and an excellent videographer. He captured 
                    all of our moments from the vows to the Newlywed Game, 
                    providing us with a shorter summary video as well as the long 
                    form of all the different events."
                </p>
                <p className="quoter">- Nathan & Acacia </p>
            </div>
        </div>
    )

    const QuoteAustinSarah = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p className="lite">
                    "Greg not only caught the details and wedding 
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
        QuoteOne,
        QuoteTwo,
        QuoteJacobAndrea,
        QuoteAdamClara,
        QuoteNateAcacia,
        QuoteAustinSarah
    }
}

export default Testimonials
