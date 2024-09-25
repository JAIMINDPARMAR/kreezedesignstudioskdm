import React from "react";
import { MainBanner } from "./MainBanner";
import "../Css/WhatWeBringeThTheTable.css";
import banner from "../Images/Home/1 (7).webp";
import { Link } from "react-router-dom";
import TitleSection from "./TitleSection";
import { BsArrowRight } from "react-icons/bs";

import back from "../Images/Home/Architecture.jpg";
import { Slide } from "react-reveal";
const WhatWeBringeThTheTable = () => {
  return (
    <>
      <section
        style={{
          // backgroundImage:
          //   "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)),url('" +
          //   back +
          //   "')",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "100% 100%",
          // objectFit: "cover",
          // backgroundAttachment: "fixed",
          // color: "white",
        }}
      >
        <TitleSection
          title="WHAT WE BRINGE TO THE TABLE"
          titlePara="Your Dreams, Our Design: Excellence at Every Turn."
        />
        {/* <MainBanner
        title="What We Bringe To the Table"
        imgURL={banner}
        para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor"
      /> */}
        <section>
          <div className="container">
            <div className="row">
              <div className="">
                <Slide bottom>
                  <p>
                  At Kreeze Design Studio, we combine creativity, expertise,
                  and a personalized approach to deliver exceptional
                  interior design solutions. Our talented team brings 
                  a wealth of experience, transforming your vision into
                  beautifully curated spaces that reflect your unique 
                  style and needs.We prioritize collaboration, ensuring
                  your ideas are at the forefront of our design process.
                  With a keen eye for detail With a deep understanding of
                  design principles and current trends, we bring innovative 
                  solutions that elevate your space. Our designers are adept 
                  at balancing aesthetics with practicality, ensuring that
                  each element serves a purpose while enhancing the overall
                  beauty of your environment.


                  </p>
                </Slide>
                <div className="main-btn-1">
                  <button className="what-we-bringe-button" id="btn-submit">
                    <span className="what-we-bringe-button-text">
                      View More{" "}
                      <label>
                        {" "}
                        <BsArrowRight />{" "}
                      </label>{" "}
                    </span>
                    <div className="what-we-bringe-button-loader">
                      <div />
                      <div />
                      <div />
                    </div>
                  </button>
                </div>
                {/* <div className='what-main-btn'>
      <Link to="/Project">
      <button className="button" id="btn-submit">
        <span className="button-text">View More</span>
        <div className="button-loader">
          <div />
          <div />
          <div />
        </div>
      </button>
      </Link>
      </div> */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default WhatWeBringeThTheTable;
