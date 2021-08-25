import React from 'react';
import ReactDOM from 'react-dom'
import Home from './Home';
import { BrowserRouter as Router, } from "react-router-dom";

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
    set: () => {},
});

it('renders properly', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Router><Home/></Router>, div)

    ReactDOM.unmountComponentAtNode(div);
})