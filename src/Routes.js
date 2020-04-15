import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ourWork from "./ourWork/ourWork"
import Home from "./home/Home"
const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/ourwork" exact component={ourWork} /> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;