import React from 'react';
import ReactDOM from 'react-dom'
import Menu from './Menu';
import { BrowserRouter as Router, } from "react-router-dom";

it('renders properly', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Router><Menu/></Router>, div)
})