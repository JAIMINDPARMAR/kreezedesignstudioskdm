import React from "react";
import { MainBanner } from "./MainBanner";
import banner from "../Images/Home/1 (8).webp";
import "../Css/DesignElement.css";
import DesignElementData from "../Asserts/DesignElementData";
import { Fade, Zoom } from "react-reveal";

const DesignElement = () => {
  return (
    <>
      <MainBanner
        title="Design Element"
        imgURL={banner}
        para="We specialize in custom design elements that tell your story, 
        ensuring each piece is thoughtfully crafted to enhance the beauty and functionality of your space."
      />
      <section>
        <div className="container-fluid">
          <div className="main-pinterest-grid">
            <div className="row">
              {DesignElementData.map((v, i) => {
                return (
                  <>
                    <div className="pinterest-grid">
                      <h6 className="text-center">{v.name} </h6>
                      {v.images.map((e) => {
                        return (
                          <>
                            <div className="design-element-card">
                              <Fade>
                                <Zoom>
                                <div>
                                <img
                                  className="design-element-card-img"
                                  src={e.img}
                                />
                              </div>
                              <h2 className="design-element-card-name">
                                {e.imageName}{" "}
                              </h2>
                                </Zoom>
                              </Fade>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DesignElement;
