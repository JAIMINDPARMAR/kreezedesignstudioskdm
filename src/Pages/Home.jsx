import React, { useRef, useState,useEffect } from "react";
import "../Css/Home.css";
import Blog from "../Images/Home/Home Blog.jpg";
import Architecture from "../Images/Home/Architecture.jpg";
import Homebackstyle from "../Images/Home/Home back style.jpg";
import Logo from "../Images/logo/Kreeze Design Studio.png";
import Slide from "react-reveal/Slide";
import { Zoom } from "react-reveal";
import Loader from "./Loader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import idea from "../Images/Home/Idea.jpg";
import interior from "../Images/Home/interior.jpg";
import landscape from "../Images/Home/Landscape.jpg";
import eacade from "../Images/Home/contactus.png";
import findus from "../Images/Home/Find Us.jpg";
import office from "../Images/Home/Office.jpg";
import drawings from "../Images/Home/drawing1.png";
import { FiPlus } from "react-icons/fi";
import { PiPlusThin } from "react-icons/pi";
import home3 from "../Images/Home/1 (1).webp";
import home1 from "../Images/Home/1 (2).webp";
import home2 from "../Images/Home/Home(2).jpg";
import home4 from "../Images/Home/Home(4).jpg";
import home6 from "../Images/Home/Home(6).jpg";
import home1p from "../Images/Home/Home(1).png";
import interior1 from "../Images/Home/1 (3).webp";
import interior2 from "../Images/Home/1 (4).webp";
import interior3 from "../Images/Home/1 (5).webp";
import interior4 from "../Images/Home/1 (6).webp";
import interior5 from "../Images/Home/1 (7).webp";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <>
      <section className="home-section-1-con">
      
        <div className="container">
          <div className="home-page-section-1-first-con">
            <div className="row">
              <div className="col-md-6">
                <div className="home-section-1-first-Con">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="home-section-1-first-image-main-con">
                        <Slide left className="">
                          <Link to="/experties">
                            <div className="home-section-1-first-image">
                              <img
                                src={home3}
                                style={{ objectFit: "cover" }}
                                alt="Blog"
                              />
                              <div className="Home-Page-secon-image-overlay-con">
                                <h3>Blog</h3>
                                <div className="home-page-secion-overlay-text">
                                  <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Slide>
                        <Slide left>
                          <Link to="/architecture">
                            <div className="home-page-secon-image-con">
                              <img src={home1} alt="Architecture" />
                              <div className="Home-Page-secon-image-overlay-con">
                                <h3>Architecture</h3>
                                <div className="home-page-secion-overlay-text">
                                  <p>
                                  Our studio combines architectural expertise with creative design, crafting spaces that are both stunning and functional.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Slide>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="home-section-Second-image-main-con">
                        <Slide top>
                          <Link to="/experties">
                            <div
                              className="home-page-third-image-con"
                              style={{ backgroundColor: "#363636" }}
                            >
                              {/* <img src={Homebackstyle} alt='Home back style' /> */}
                              <div className="Home-Page-secon-backstyle-overlay-con">
                                <h3 className="text-white">About Us</h3>
                                <div className="home-page-secion-overlay-text blacktext">
                                  <p className="text-white">
                                  We take a blank canvas and turn it into something beautiful,
                                   useful for interiors that express your individual style.
                                    
                                  </p>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </Slide>

                        <div className="home-page-four-image-con home-logo-back">
                          <img src={Logo} alt="Kreeze Design Studio" />
                        </div>
                        <Zoom>
                        <div className="home-page-third-image-con">
                          <img src={Homebackstyle} alt="Home back style" />
                          <div className="Home-Page-secon-backstyle-overlay-con">
                            <h3>Services</h3>
                            <div className="home-page-secion-overlay-text blacktext">
                              <p>
                              Kreeze offers bespoke interior design services, transforming spaces with personalized aesthetics
                               and functional layouts tailored to each client's unique taste. 
                              </p>
                            </div>
                          </div>
                        </div>
                        </Zoom>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="home-page-Section-2-main-images-con">
                  <div className="row">
                    <div className="col-md-6">
                      <Slide top>
                        <div className="home-page-secon-image-con">
                          <img src={idea} alt="idea" />
                          <div className="Home-Page-secon-image-overlay-con">
                            <h3>Idea</h3>
                            <div className="home-page-secion-overlay-text">
                              <p>
                              Kreeze realizes your ideal environments with an inventive design enthusiasm and a quality-driven approach
                              </p>
                            </div>
                          </div>
                        </div>
                      </Slide>
                    </div>
                    <div className="col-md-6">
                      <Slide top>
                        <Link to="/design-element">
                          <div className="home-page-third-image-con">
                            <img src={Homebackstyle} alt="Home back style" />
                            <div className="Home-Page-secon-backstyle-overlay-con">
                              <h3>Elements</h3>
                              <div className="home-page-secion-overlay-text blacktext">
                                <p>
                                "Crafting Spaces: Explore Our Design Elements"

                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </Slide>
                    </div>
                    <div className="col-md-12">
                      <Slide right>
                        <Swiper
                          spaceBetween={30}
                          centeredSlides={true}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          modules={[Autoplay, Pagination, Navigation]}
                          className="mySwiper"
                        >
                          <SwiperSlide>
                            <Link to="/interiors">
                              <div className="home-section2-image-eight">
                                <img
                                  src={interior1}
                                  style={{ objectFit: "cover" }}
                                  alt="interior"
                                />
                                <div className="Home-Page-secon-image-overlay-con">
                                  <h3>Interior</h3>
                                  <div className="home-page-secion-overlay-text">
                                    <p>
                                    "Bespoke Interiors, Lasting Impressions."
                                    
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="home-section2-image-eight">
                              <img
                                src={interior2}
                                style={{ objectFit: "cover" }}
                                alt="interior"
                              />
                              <div className="Home-Page-secon-image-overlay-con">
                                <h3>Interior</h3>
                                <div className="home-page-secion-overlay-text">
                                  <p>
                                  "Crafting Unique Environments Just for You"
                                  </p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="home-section2-image-eight">
                              <img
                                src={interior3}
                                style={{ objectFit: "cover" }}
                                alt="interior"
                              />
                              <div className="Home-Page-secon-image-overlay-con">
                                <h3>Interior</h3>
                                <div className="home-page-secion-overlay-text">
                                  <p>
                                  "Unleashing the Potential of Every Room."
                                  </p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="home-section2-image-eight">
                              <img
                                src={interior4}
                                style={{ objectFit: "cover" }}
                                alt="interior"
                              />
                              <div className="Home-Page-secon-image-overlay-con">
                                <h3>Interior</h3>
                                <div className="home-page-secion-overlay-text">
                                  <p>
                                  "Innovative Interiors, Timeless Elegance."

                                  </p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="home-section2-image-eight">
                              <img
                                src={interior5}
                                style={{ objectFit: "cover" }}
                                alt="interior"
                              />
                              <div className="Home-Page-secon-image-overlay-con">
                                <h3>interior</h3>
                                <div className="home-page-secion-overlay-text">
                                  <p>
                                  "Crafting the Perfect Atmosphere."

                                  </p>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </Slide>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Home-Page-Section-last-main-con">
              <div className="row">
                <div className="col-md-3">
                  <Slide left>
                    <div className="home-page-secon-image-con">
                      <img src={landscape} alt="idea" />
                      <div className="Home-Page-secon-image-overlay-con">
                        <h3>Landscape</h3>
                        <div className="home-page-secion-overlay-text">
                          <p>
                           We blend artistry and nature to design landscapes that enrich your home, incorporating lush greenery, vibrant flowers, and inviting spaces for gatherings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Slide>
                </div>
                <div className="col-md-6">
                  <Zoom>
                  <div className="home-page-secon-image-con">
                    <img src={eacade} alt="idea" />
                    <div className="Home-Page-secon-image-overlay-con">
                      <h3>Facade</h3>
                      <div className="home-page-secion-overlay-text">
                        <p>
                        We design captivating facades that blend creativity and context,
                        transforming the exterior of your space into a stunning visual statement.
                        </p>
                      </div>
                    </div>
                  </div>
                  </Zoom>
                </div>
                <div className="col-md-3">
                <Slide right>
                <Link to="/contactUs">
                    <div className="home-page-secon-image-con">
                      {/* <img src={findus} alt='idea' /> */}
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15079.453872042153!2d72.86973389999999!3d19.11364465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c83c05b7fc89%3A0xbe87eb057f3aafda!2sAndheri%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1712655610125!5m2!1sen!2sin"
                        //   width={600}
                        //   height={450}

                        style={{ border: 0, height: "100%" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      <div className="Home-Page-secon-image-overlay-con">
                        <h3>Find Us</h3>
                        <div className="home-page-secion-overlay-text">
                          <p>
                          "Locate Us: Your Journey to Beautiful Spaces Starts Here!"

                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Slide>
                  
                </div>
              </div>
            </div>

            <div className="Home-Page-Section-last-main-con">
              <div className="row">
                <div className="col-md-3">
                <Slide left>
                <div className="home-page-secon-contact-con">
                    <Link to="/contactUs">
                      <div className="Home-Page-secon-contact-overlay-con">
                        <h3>Contact Us</h3>
                        <div className="home-page-secion-overlay-text">
                          <p>
                          "Ready to Transform Your Space? Get in Touch!"
                          </p>
                          <div className="home-section-overlay-btn-con">
                            <div className="home-section-svg-overlay-btn-con">
                              <div className="home-section-overlay-btn">
                                <PiPlusThin />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Slide>
                  
                </div>
                <div className="col-md-3">
                  <Slide bottom>
                  <div className="home-page-secon-image-con">
                    <img src={office} alt="idea" />
                    <div className="Home-Page-secon-image-overlay-con">
                      <h3>Office</h3>
                      <div className="home-page-secion-overlay-text">
                        <p>
                        We design offices that enhance workflow and comfort, integrating your 
                        brand's identity into every detail for a truly unique work environment.
                        </p>
                      </div>
                    </div>
                  </div>
                  </Slide>
                </div>
                <div className="col-md-6">
                  <Slide bottom>
                  <div className="home-page-secon-image-con">
                    <img src={drawings} alt="idea" />
                    <div className="Home-Page-secon-image-overlay-con">
                      <h3>Drawings</h3>
                      <div className="home-page-secion-overlay-text">
                        <p>
                        Our detailed drawings offer a clear vision of your space, combining creativity and
                         precision to guide your design journey from concept to completion.
                        </p>
                      </div>
                    </div>
                  </div>
                  </Slide>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
