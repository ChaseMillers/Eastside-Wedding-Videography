import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import OurWork from "./ourWork/ourWork"
import Home from "./home/Home"
import Packages from "./packages/Packages"
import Contacts from "./contact/Contact"

const Routes = () => {
    const {
        ContactPage
    } = Contacts();
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/ourwork" exact component={OurWork} /> 
                <Route path="/packages" exact component={Packages} /> 
                <Route path="/Contact" exact component={ContactPage} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;