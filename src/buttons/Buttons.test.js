import React from 'react';
import ReactDOM from 'react-dom'
import Buttons from './Buttons';
import { BrowserRouter as Router, } from "react-router-dom";

const {
    VideoContactBtn
} = Buttons();

it('All contaact elements render properly', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
    <Router>
        <VideoContactBtn/>
    </Router>
    , div)
})