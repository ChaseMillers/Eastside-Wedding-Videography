import React, { useEffect, Suspense, lazy } from 'react';
import Layout from "../Layout/Layout"
import "./Packages.css"
import FadeIn from 'react-fade-in';
const PackageSet = lazy(() =>
    import("./packageSet")
);

const imgDroppin =()=>{
    return(
        <div className="img-banner">
            <img
                className="sofias-pic"
                src="photos/sofiaPackage.jpg"
                alt="bride looking down smiling"
            />
        </div>
    )
}

const Packages = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []) // on page load

    return (
        imgDroppin &&
        <Layout>
            <FadeIn className="package-container">

                <h1>Packages</h1>
                {imgDroppin()}

                <Suspense fallback={<div></div>}>
                    <PackageSet />
                </Suspense>

            </FadeIn >
        </Layout>)
}
export default Packages
