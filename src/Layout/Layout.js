import React, { Fragment, Suspense, lazy} from "react";
import StickyHeader from "../sticky/stickyHelper"
import Logo from "../logo/Logo"
import "./Layout.css"
const Footer = lazy(() =>
    import("../footer/Footer")
);

const Layout = ({
    children
}) => (
        <Fragment>   
            <Logo />
            <StickyHeader />
            {children}
            <Suspense fallback={<div></div>}>
                <Footer />
            </Suspense>
            
        </Fragment>
    );

export default Layout;
