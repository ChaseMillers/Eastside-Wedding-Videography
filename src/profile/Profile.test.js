import React from 'react';
import ReactDOM from 'react-dom'
import Profile from "./Profile";

it('renders properly', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Profile/>, div)
})