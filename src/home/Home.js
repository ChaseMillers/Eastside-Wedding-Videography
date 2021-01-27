import React, { Suspense, lazy } from "react";
import "./Home.css"
import Buttons from '../buttons/Buttons'
import ReactPlayer from 'react-player'
import Layout from "../Layout/Layout"
const HomeInfo = lazy(() =>
    import("./HomeInfo")
);

const Home = () => {
    const {
        videoContactBtn
    } = Buttons();
    return(
        <Layout>
            <div className="home-container">

                <div className="home-demo">
                {videoContactBtn()}
                    <ReactPlayer
                    url="/videos/demoSC.mov"
                    className='react-player'
                    playing
                    preload="true"
                    muted
                    loop
                    width='100%'
                    height='100%'
                    />
                </div>
            <Suspense fallback={<div></div>}>
                <HomeInfo />
            </Suspense>
            </div>
        </Layout>
    )
}

export default Home
