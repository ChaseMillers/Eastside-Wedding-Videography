import React from 'react';
import ReactDOM from 'react-dom'
import Testimonials from './Testimonials';
import { BrowserRouter as Router, } from "react-router-dom";

const {
    QuoteJacobAndrea,
    QuoteAdamClara,
    QuoteNateAcacia,
    QuoteAustinSarah,
    QuoteTwo,
    QuoteOne
} = Testimonials();

it('All quotes render properly', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
    <Router>
        <QuoteJacobAndrea/>
        <QuoteAdamClara/>
        <QuoteNateAcacia/>
        <QuoteAustinSarah/>
        <QuoteTwo />
        <QuoteOne />
    </Router>
    , div)
})