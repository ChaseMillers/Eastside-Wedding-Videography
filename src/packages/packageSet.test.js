import React from 'react';
import PackageSet from './packageSet'
import { BrowserRouter as Router, } from "react-router-dom";
import { render, screen } from '@testing-library/react';



test('3 Buttons on contact page', () => {
    render(<Router><PackageSet/></Router>);

    const buttonsArray = screen.getAllByRole('link', {name:'SELECT'})
    console.log(buttonsArray.length)
    expect(buttonsArray.length).toEqual(3);
})

// getAllByText(''), will find all
// screen.getByRole(''), will target a Element, run as empty string to see accessible roles.
// screen.debug(), will console.log() the body