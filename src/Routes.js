import React, {useEffect} from 'react';
import { Router, Switch, Route } from "react-router-dom";
import OurWork from "./ourWork/ourWork"
import Home from "./home/Home"
import Packages from "./packages/Packages"
import Contacts from "./contact/Contact"
import ReactGA from 'react-ga'
import createHistory from 'history/createBrowserHistory'


const Routes = () => {
    const {
        ContactPage
    } = Contacts();
    const history = createHistory()
    history.listen(location => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
    });
    useEffect(() => {
         ReactGA.pageview(window.location.pathname + window.location.search)
     }, [history])
    return(
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} /> 
                <Route path="/ourwork" exact component={OurWork} /> 
                <Route path="/packages" exact component={Packages} /> 
                <Route path="/Contact" exact component={ContactPage} /> 
            </Switch>
        </Router>
    )
}
export default Routes; 