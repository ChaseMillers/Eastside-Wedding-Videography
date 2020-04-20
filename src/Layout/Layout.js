import React, {Fragment} from "react";
import Contact from '../contact/Contact'
import Home from '../home/Home'
import StickyHeader from "../sticky/stickyHelper"
import Logo from "../logo/Logo"
import "./Layout.css"
import Packages from "../packages/Packages"
import Buttons from "../buttons/Buttons"
import Footer from "../footer/Footer"

const Layout = ({
    className,
    children
}) => (
        <Fragment>   
            <Logo />
            <StickyHeader />
            {children}
            <Footer />
        </Fragment>
    );

export default Layout;