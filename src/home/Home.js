import React, { Fragment} from "react";
import "./Home.css"
import Buttons from '../buttons/Buttons'
import ReactPlayer from 'react-player'
import Testimonials from "../testimonials/Testimonials"
import Contact from "../contact/Contact"
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout"

const Home = () => {
    const {
        videoContactBtn
    } = Buttons();
    const {
        quoteOne,
        quoteTwo
    } = Testimonials();
    
    return(
        <Layout>
            <section>
                {videoContactBtn()}
                <ReactPlayer
                url="/videos/demoC.mp4"
                className='react-player'
                playing
                preload
                muted
                loop
                width='100%'
                height='100%'
                />
                <div className="message">
                    <h1>HELPING YOU REMEMBER EVERY MOMENT.</h1>
                    <p> 
                        We’ll capture your unique story, creating a 
                        priceless keepsake allowing you to treasure the memory forever.  
                    </p>
                </div>
                {quoteOne()}
            </section>

        <section >
            <div className="video-holder-home"> 
                <ReactPlayer
                    url="https://vimeo.com/381476056"
                    className='highlight-player'
                    light='./pics/A&C.webp'
                    controls
                    playing
                    width="500px"
                    height='220px'
                />
            </div>
            <div className="our-work">
                <Link className="home-link" to="/ourwork">
                    <div className="button-work">
                        <h2>Our Work</h2>
                        <div className="img-holder-one">
                            <img src="./pics/mePS.webp"/>
                        </div>
                    </div>
                </Link>
                <Link className="home-link" to="/packages">
                    <div className="button-work">
                        <h2>Packages</h2>
                        <div className="img-holder-two">
                            <img src="./pics/cakePS.webp"/>
                        </div>
                    </div>
                </Link>
            </div>
        </section>

        <section>
            <div className="profile-container">
                <div className="profile">
                    <div className="img-title-container">
                        <div className="profile-pic">
                        <img src="https://lh3.googleusercontent.com/-SN-vF4nLY5-RP4a9qAgbDMUuscdrLbNMqXkW_aBasObQbNFNeZ4Eh-vH09tq6zrsQ4OfnjuE2ZNIsaT7ToQ7qS2qiNjS3m-Q7fdEcShgRp9vNY5FJtOGyne_2ydYdTx1eIhcz3NvOXw_jb14Lk0i8-ri67nWhrtr-0kmWSbtAt-AKifYspnifSF2az08CDUopv7YKWma3DmihLzuBvpoXfGmSaxaGp53UTq0GDADG4qq8nRYNpTDX6kEivCCPwWfq-NJQpemtCmnMXeIZDb1J_QMrMJFScpfvnBQXOI1z6Ho2azSdynL0QKZ0lRvB_LfV-w_8Noo7LNs9jSQqdrxiaJ4IgiemRKhgnxk652_bvN19G3hZ7ko4IcRcnqGaDa7TXvw80QDsC0ynQ_W7vaO1w-NZJTyh4f1RxsjRab7G5bWdtMMAStbTXjfwXS-nMQLhljL5Zja8lvwYqnNliG5hIk67AjT2npfnP37z-rngcSN6_5owAVMLiPFYGiuBEG5MITAgNRtqL9JfUVFU7KvTbvZsbmahQtBznjYLuMQqruYbaFg43D7ad3yT0KhG8JDCRoesUPWRw4bH4ih0L8rbrNIEI_zOom5HcjwvK5g8Zv_g-hDWhe37y4vcAJHeTcncyUzGQNt8hpv3xFCYsmnjI8dVxtiWysoXZCyMevP5cW7WeNOFRuePhUy5VC_A=w483-h609-no"/>
                        </div>
                        <h3>Eastside Wedding Videography</h3>
                    </div>
                    <div className="profile-text">
                        <p>
                        Growing up with brothers, we filmed many home videos 
                        and I grew to love videography. As I obtained more equipment 
                        and honed my craft, I offered to film my brother's wedding In the 
                        summer of 2016. After that experience, I knew what my business 
                        would be all about; working hard to preserve your memory the 
                        way you want to remember it, and Eastside Wedding Videography 
                        was born. You will love our films, commitment to quality is 
                        the cornerstone of our work. Give us a call! 
                        We would love to hear from you.
                        </p>
                        <p className="quoter">- Greg Miller, founder of Eastside Wedding Videography.</p>
                    </div>
                </div>
            </div>
        </section>
        {quoteTwo()}
        <div className="img-banner">
            <img src="./pics/girls.webp"/>
        </div>
        <Contact />
        </Layout>
    )
}

export default Home