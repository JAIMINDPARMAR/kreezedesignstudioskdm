import React from 'react';
import "../Css/About.css";
import { PiPlusThin } from "react-icons/pi";
import about from "../Images/About/about image.jpg";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import team1 from "../Images/About/Team/team-1.jpg";
import team2 from "../Images/About/Team/team-2.jpg";
import team3 from "../Images/About/Team/team-3.jpg";
import team4 from "../Images/About/Team/team-4.jpg";
import team5 from "../Images/About/Team/team-5.jpg";
import team6 from "../Images/About/Team/team-6.jpg";
import { MainBanner } from './MainBanner';
import banner from "../Images/Home/Eacade.jpg";
import { Slide } from 'react-reveal';
import TitleSection from './TitleSection';
import NewBanner from './NewBanner';

const About = () => {
    return (
        <>
            {/* <section className='about-section-banner'>

            </section>
            <section className='about-section-1-con'>
                <div className='container'>
                    <div className='about-section-1-overlay-section'>
                        <div className='about-section-main-con'>
                            <div
                                className="qodef-section-title-holder qodef-st-corners qodef-st-title-left qodef-st-normal-space qodef-st-animate"
                                style={{ textAlign: "center" }}
                            >
                                <div className="qodef-st-inner">
                                    <span className="qodef-corner-line line-1" />
                                    <span className="qodef-corner-line line-2" />
                                    <span className="qodef-corner-line line-3" />
                                    <span className="qodef-corner-line line-4" />
                                    <h2 className="qodef-st-title">About Us </h2>
                                    <span className="qodef-st-text">
                                        Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi
                                        tudin lorem quis bibendum auctor{" "}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section> */}
            {/* <MainBanner title="The Studio" imgURL={banner} para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor" /> */}
            <NewBanner
                title="The Studio"
                imgURL={banner}
                para="Explore Kreeze Design Studio, where innovative design meets client-centered service. Our passionate team specializes in creating tailored interiors that enhance both beauty and functionality"
            />
            {/* <TitleSection
        title="Who we are"
        titlePara="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor"
      /> */}
            <section className='mb-5'>
                <div className='container'>
                    <div className='about-section-image-details'>
                        <div className='row'>
                            <div className='col-md-6 '>
                                <Slide left>
                                    <div className='about-page-section-image-con'>
                                        <img src={about} alt='' />
                                    </div>
                                </Slide>

                            </div>
                            <div className='col-md-6 '>
                                <Slide right>
                                    <div className='about-section-page-about-details-con'>
                                        <div className='about-section-page-about-details'>
                                            <div className='about-section-page-about-info'>
                                                <h3>Who we are</h3>
                                                <p>
                                                "Kreeze Design Studio is a young leading Architecture and Interior
                                                 design firm. We believe in an Architecture of complexities and 
                                                 contradictions. Clean yet quirky, hybrid rather than pure, simple
                                                  but not simplistic. We practice a process driven design evolution
                                                   and like to push our creative boundaries. Every crease is a step
                                                    towards design."

                                                </p>
                                                <div className='About-section-page-plus-btn'>
                                                    <div className='home-section-svg-overlay-btn-con'>
                                                        <div className='home-section-overlay-btn'>
                                                            <PiPlusThin />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default About