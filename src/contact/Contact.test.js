import React from 'react';
import Contacts from './contact'
import { BrowserRouter as Router, } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from "history";


const {
    ContactPage
} = Contacts();


test("renders location state", () => {
    const history = createMemoryHistory();
    // history.push("/", 'Platinum Package');
  
    render(
      <Router history={history}>
        <ContactPage />
      </Router>
    );
  
  });