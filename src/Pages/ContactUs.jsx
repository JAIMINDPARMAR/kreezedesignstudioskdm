import React from 'react'
import { MainBanner } from './MainBanner'
import "../Css/ContactUs.css"
import banner from "../Images/Home/contactus.png";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { Slide } from 'react-reveal';
import { Fade } from "react-reveal";


const ContactUs = () => {
  return (
    <>
      {/* <MainBanner
        title="Contact Us"
        imgURL={banner}
        para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor"
      /> */}
      <section className='main-map-sec'>
        <div className='fluid-container main-iframe'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12659.204796614527!2d72.83653691994074!3d19.102303063024603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c98334c2e853%3A0xf7793ca2f7ba8c99!2sKreeze%20Design%20Studio!5e0!3m2!1sen!2sin!4v1714210111883!5m2!1sen!2sin"
            className='contact-us-iframe'
            // style={{ border: 0, width:"100%", height:"" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>
      </section>
      <section className="contact-section-1-con ">
        <div className="container">
          <div className="contact-section-1-overlay-section">
            <div className="contact-section-main-con">
              <div
                className="qodef-section-title-holder qodef-st-corners qodef-st-title-left qodef-st-normal-space qodef-st-animate"
                style={{ textAlign: "center" }}
              >
                <div className="qodef-st-inner">
                  <span className="qodef-corner-line line-1" />
                  <span className="qodef-corner-line line-2" />
                  <span className="qodef-corner-line line-3" />
                  <span className="qodef-corner-line line-4" />
                  <Fade down>
                  <h2 className="qodef-st-title">Contact Us </h2>
                  </Fade>
                  <p className="qodef-st-text"> 
                  We’d love to hear from you! Whether you have a question, want to discuss a project, or simply need design advice, our team is here to help. Fill out the form below or reach out directly, and let’s bring your vision to life!
                   </p>
                </div>
              </div>
            </div>
            {/* <div className='about-section-image-details'>
                <div className='row'>
                    <div className='col-md-6 p-0'>
                        <div className='about-page-section-image-con'>
                            <img src={about} alt='' />
                        </div>
                    </div>
                    <div className='col-md-6 p-0'>
                        <div className='about-section-page-about-details-con'>
                            <div className='about-section-page-about-details'>
                                <div className='about-section-page-about-info'>
                                    <h3>ALL OVER THE WORLD</h3>
                                    <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi sit.</p>
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
                    </div>
                </div>

            </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <Slide left>
                <h2> Find Us </h2>
                <p>
                We invite you to explore our creative space, where ideas come to life. Whether you’re looking for inspiration or ready to start your design journey
                </p>
                <ul>
                  <div className='row'>
                    <div className='address'>
                      <label> <CiLocationOn className='address-icon' /> </label>
                      <span className='address-detaiils'> 701, Zee Square, Mahatma Gandhi Rd, Vile Parle East,Mumbai, Maharashtra 400057</span>
                    </div>
                    <div className='address'>
                      <label>
                        <IoMdCall className='address-icon' />
                      </label>
                      <span className='address-detaiils'>
                      <a href="tel:9833985889" style={{color:'#1b1b1b'}}>+91 98339 85889</a> 
                        {/* / 00000000 */}
                      </span>
                    </div>
                  </div>
                  {/* <div className=' row row-cols-2 benefit-list'>
             
              <li  className='col mb-4'>          <div className='' > PERSONAL DEVELOPEMENT </div></li>
              <li className='col mb-4'>              <div > EDUCATIONAL DEVELOPMENT </div></li>
              <li className='col mb-4'>              <div > TECHNICAL UPSKILLING </div></li>
              
                 
              </div> */}
                </ul>
              </Slide>
            </div>
            <div className='col-md-6'>
              <div className="container">
                <div className="well">
                  <Slide right>
                    <form action="#" method="post">

                      <div>
                        <input
                          type="text"
                          placeholder='Name'
                          name="login-username"
                          id="login-username"
                          required=""
                        />
                        {/* <label htmlFor="login-username">Username</label> */}
                      </div>
                      <div>
                        <input
                          type="number"
                          placeholder='Phone Number'
                          name="login-username"
                          id="login-username"
                          required=""
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder='Email'
                          name="login-username"
                          id="login-username"
                          required=""
                        />
                        {/* <label htmlFor="login-username">Username</label> */}
                      </div>
                      <div>
                        <textarea id="story" name="story" rows="5" cols="33" placeholder='type your message here....'  >

                        </textarea>
                        {/* <label htmlFor="login-username">Username</label> */}
                      </div>

                      {/* <a href="#" id="forgot-passwd">
       Forgot Password?
     </a> */}
                      <div className=''>
                        <button className="button" id="btn-submit">
                          <span className="button-text">Send</span>
                          <div className="button-loader">
                            <div />
                            <div />
                            <div />
                          </div>
                        </button>
                      </div>
                    </form>
                  </Slide>
                  {/* <p>
      Don't have an account? <a href="#">Sign Up</a>.
    </p> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs