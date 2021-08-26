import React, { useEffect, Suspense, lazy } from 'react';
import Layout from "../Layout/Layout"
import "./Packages.css"
import FadeIn from 'react-fade-in';
const PackageSet = lazy(() =>
    import("./packageSet")
);

const ImgDroppin =()=>{
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
    }, []) // once on page load

    return (
        <ImgDroppin/> &&
        <Layout>
            <FadeIn className="package-container">

                <h1>Packages</h1>
                {ImgDroppin()}

                <Suspense fallback={<div></div>}>
                    <PackageSet />
                </Suspense>

            </FadeIn >
        </Layout>)
}
export default Packages
