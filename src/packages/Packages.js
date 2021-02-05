import React, { useEffect, Suspense, lazy } from 'react';
import Layout from "../Layout/Layout"
import "./Packages.css"
import FadeIn from 'react-fade-in';
const PackageSet = lazy(() =>
    import("./Package.js")
);

const Packages = () =>{

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return(
        <Layout>
            <FadeIn className="package-container">
                
                    <h1>Packages</h1>
                    <div className="img-banner">
                        <img
                            className="sofias-pic"
                            src="photos/sofiaPackage.jpg"
                            alt="bride looking down smiling"
                        />
                    </div>
                    
                    <Suspense fallback={<div></div>}>
                        <PackageSet />
                    </Suspense>

                
            </FadeIn >
        </Layout>)
}
export default Packages
