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
    
    const Brynn = () =>(
        <div className="quote-container">
            <h1 className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</h1>
            <div className="quote">
                <p className="lite">
                    "Greg truly captured every great moment of our wedding! 
                    I especially loved the way he captured the moods and 
                    expressions of each event from the joy of the first look 
                    to the laughs with friends. An expert editor he knows how 
                    to put together a great film!"
                </p>
                <p className="quoter">- Kevin & Brynn </p>
            </div>
        </div>
    )


    return{
        QuoteOne,
        QuoteTwo,
        QuoteJacobAndrea,
        QuoteAdamClara,
        Brynn
    }
}

export default Testimonials
