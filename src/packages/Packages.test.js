import React from 'react';
import Packages from './Packages'
import { BrowserRouter as Router, } from "react-router-dom";
import { render, screen } from '@testing-library/react';


test('Renders Packages', () => {
    render(<Router><Packages/></Router>);
});


  