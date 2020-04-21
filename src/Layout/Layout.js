import React, {Fragment} from "react";
import StickyHeader from "../sticky/stickyHelper"
import Logo from "../logo/Logo"
import "./Layout.css"
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