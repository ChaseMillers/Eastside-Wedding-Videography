import React from 'react';
import Contacts from './contact'
import { BrowserRouter as Router, } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";
import { expect } from 'chai';
import { Simulate } from 'react-dom/test-utils';


const {
    ContactPage,
    Contact
} = Contacts();


test("After form submit, thank you message displays", () => {
    const history = createMemoryHistory();

    render(
        <Router>
            <Contact location={history}/>
        </Router>
    )
 
    const nameInput = screen.getByLabelText(/name*/i)
    const emailInput = screen.getByLabelText(/email*/i)
    const phoneInput = screen.getByLabelText(/phone/i)
    const packageOptions = screen.getByLabelText(/which package?/i)
    const submitButton = screen.getByRole('button', /send/i)

    // jest version has bugged "userEvent.type", reversing all strings. Opting for paste instead.
    userEvent.paste(phoneInput, "(888) 888-888")
    userEvent.paste(emailInput, "testing@outlook.com")
    userEvent.paste(nameInput, "Tester Man")
    userEvent.selectOptions(packageOptions, "Platinum Package")
    fireEvent.click(submitButton)

    // Displays thank you message.
    expect( screen.getByText(/Thanks For Contacting Us!/i) )
  });


  
