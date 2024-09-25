import React from "react";
import { PiPlusThin } from "react-icons/pi";
import about from "../Images/About/about image.jpg";
import "../Css/MainBanner.css";
import { Fade } from "react-reveal";
export const MainBanner = ({ title, para, imgURL }) => {
  return (
    <>
      <section
        className="about-section-banner"
        style={{
          backgroundImage: "url('"+imgURL+"')",
          height: "64vh",
          backgroundSize: "cover",
        }}
      ></section>
      <section className="about-section-1-con ">
        <div className="container">
          <div className="about-section-1-overlay-section shadow">
            <div className="about-section-main-con">
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
                  <h2 className="qodef-st-title"> {title} </h2>
                  </Fade>
                  <p className="qodef-st-text">{para} </p>
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
    </>
  );
};
