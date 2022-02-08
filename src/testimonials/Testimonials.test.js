import React from 'react';
import ReactDOM from 'react-dom'
import Testimonials from './Testimonials';
import { BrowserRouter as Router, } from "react-router-dom";

const {
    QuoteJacobAndrea,
    QuoteAdamClara,
    Brynn,
    QuoteTwo,
    QuoteOne
} = Testimonials();

it('All quotes render properly', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
    <Router>
        <QuoteJacobAndrea/>
        <QuoteAdamClara/>
        <Brynn/>
        <QuoteTwo />
        <QuoteOne />
    </Router>
    , div)
})