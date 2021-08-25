import React from 'react';
import ReactDOM from 'react-dom'
import Packages from './Packages'
import { BrowserRouter as Router, } from "react-router-dom";

it('renders properly', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Router><Packages/></Router>, div)
})