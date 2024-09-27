import React from 'react';
import "../Footer/FooterPage.css";
import KreezeDesignStudio from "../../Images/logo/Kreeze Design Studio.png";
import { Link } from 'react-router-dom';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
const FooterPage = () => {
    return (
        <>
            <section className='Footer-Main-Section'>
                <section className='Footer-Section-con'>
                    <div className='container'>
                        <div className='Footer-Section-Details'>
                            <div className='footer-section-logo-main-con'>
                                <div className='footer-section-logo-main'>
                                    <img src={KreezeDesignStudio} alt='Kreeze Design Studio' />
                                </div>
                            </div>

                            <div className='footer-section-footer-menu-con'>
                                <div className='footer-section-footer-menu'>
                                    <Link to='/'>
                                        <h3>Home</h3>
                                    </Link>
                                    <Link to='/Project'>
                                        <h3>Project</h3>
                                    </Link>
                                    <Link to='/experties'>
                                        <h3>Experties</h3>
                                    </Link>
                                    {/* <Link to='/design-element'>
                                        <h3>Design elements</h3>
                                    </Link> */}
                                    <Link to='/blog'>
                                        <h3>Blog</h3>
                                    </Link>
                                    <Link to='/contactUs'>
                                        <h3>Contact</h3>
                                    </Link>
                                </div>
                            </div>

                            <div className='footer-section-footer-address-con'>
                                <p>701, Zee Square, Mahatma Gandhi Rd, Vile Parle East,</p>
                                <p> Mumbai, Maharashtra 400057</p>
                            </div>

                            <div className='footer-section-footer-contact-con'>
                                <div className='footer-section-footer-contact'>
                                    <a href="mailto:kaiwalya@kreeze.design"><h3>kaiwalya@kreeze.design</h3></a>
                                    <a href="tel:9833985889"><h3>+91 98339 85889</h3></a>
                                </div>
                            </div>

                            <div className='footer-section-footer-social-media-main-con'>
                                <div className='footer-section-footer-social-media-main'>
                                    <a>
                                        <AiFillInstagram />
                                    </a>
                                    <a>
                                        <FaFacebookSquare />
                                    </a>
                                    <a>
                                        <IoIosMail />
                                    </a>
                                    <a>
                                        <IoCall />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='Footer-copy-right-section-con'>
                    <div className='Footer-copy-right-section'>
                        <p>Copyright © 2024, All Right Reserved <span>Kreeze ( Design Studio )</span></p>
                        <p>Designed by <a href='https://skdm.in/' target='blank'>Shree Krishna Digital Marketing</a></p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default FooterPage