import React from 'react';
import ReactDOM from 'react-dom'
import VideoPlayer from './VideoPlayer';
import { BrowserRouter as Router, } from "react-router-dom";

const {
    OurWorkVideo,
    HomeVideo,
} = VideoPlayer();

it('renders all videos', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(
    <Router>
        <OurWorkVideo/>
        <HomeVideo/>
    </Router>
    , div)
})