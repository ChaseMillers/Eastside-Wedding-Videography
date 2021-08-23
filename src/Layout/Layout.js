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
            <div className='container-layout'>  
            {children}
            </div>
            <Suspense fallback={<div></div>}>
                <Footer />
            </Suspense>
            
        </Fragment>
    );

export default Layout;
