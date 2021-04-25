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
    return (
        HomeInfo &&
        <Layout>
            <div className="home-container me">

                <div className="home-demo">
                {videoContactBtn()}
                    <ReactPlayer
                    url="/videos/demoSC.mp4"
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
