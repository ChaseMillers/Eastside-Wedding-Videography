import React from 'react';
import ReactDOM from 'react-dom'
import OurWork from './ourWork';
import { BrowserRouter as Router, } from "react-router-dom";

it('renders properly', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Router><OurWork/></Router>, div)
})