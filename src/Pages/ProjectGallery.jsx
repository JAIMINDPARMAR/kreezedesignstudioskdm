import React, { useLayoutEffect } from "react";
import StickyBox from "react-sticky-box";
import { MainBanner } from "./MainBanner.jsx";
import banner from "../Images/Home/1 (8).webp";
// import { Affix, Image } from "antd";
import { useLocation } from "react-router-dom";
import Project from "../Asserts/Project.jsx";
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import "../Css/ProjectGallery.css";
import { Affix, Image } from "antd";
import { Fade, Zoom } from "react-reveal";

const ProjectGallery = ({ imagess }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const serc = useLocation();
  const path = serc.pathname;
  console.log(path);
  const delimiter = "/";
  const as = path.split(delimiter);
  const propertyIndexOne = "/" + as[1];
  const propertyIndexTwo = "/" + as[2];

  console.log(propertyIndexTwo);
  console.log(as);
  console.log(imagess);
  const propertyDetail = Project.map((v) => v.lists).map((e) => e.s);
  console.log(propertyDetail);

  // Function to extract allImages array for a specific slug
  function getAllImagesForSlug(data, slug) {
    let allImagesArray = [];

    data.forEach((category) => {
      category.lists.forEach((list) => {
        list.imgesCards.forEach((card) => {
          if (card.slugs === slug && card.allImages) {
            allImagesArray.push(card.allImages);
          }
        });
      });
    });

    return allImagesArray.flat(); // Flatten the array
  }

  // Call the function to get allImages array for the specified slug
  let slug = "/cultural-highway";
  let allImagesForSlug = getAllImagesForSlug(Project, propertyIndexTwo);
  console.log(allImagesForSlug);
  console.log(as[2]);
  const pageTitle = as[2].replace("/");
  console.log(pageTitle);
  return (
    <>
      <MainBanner
        title={pageTitle}
        imgURL={banner}
        para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor"
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {allImagesForSlug.map((v) => {
                return (
                  <div className="w-100">
                  <Fade>
                  <Zoom>
                  <Image
                      key=""
                      src={v}
                      style={{ height: "68vh", width: "100%" }}
                    />
                  </Zoom>
                 
                  </Fade>
                    
                  </div>
                );
              })}
            </div>
            <div className="col-md-4">
              <Affix offsetTop={100}>
                <div className="qodef-ps-info-holder qodef-ps-info-sticky-holder project-gallery-right">
                  <h2>OPERA</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    Theme natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Aliquam lorem ante, dapibus in,
                    viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                    metus varius laoreet.
                  </p>
                  <div className="project-social-media">
                    <label>
                      <FaFacebookF />
                    </label>
                    <label>
                      <FaLinkedinIn />
                    </label>
                    <label>
                      <FaPinterestP />
                    </label>
                  </div>
                </div>
              </Affix>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectGallery;
