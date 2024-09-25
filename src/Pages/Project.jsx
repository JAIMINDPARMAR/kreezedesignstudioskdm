import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import { Link, NavLink } from "react-router-dom";
import "../Css/Project.css";
import Portfolidata from "../Asserts/Portfolidata";
import ProjectJson from "../Asserts/PortfolioData.json";
import { MainBanner } from "./MainBanner";
import banner from "../Images/About/About Banner.jpg";
import bannerTwo from "../Images/Home/Home(1).jpg";
import NewBanner from "./NewBanner";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("showAll")
  const [allCategory, setAllCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  

  return (
    <>
      <NewBanner
        title="Porfolio"
        imgURL={bannerTwo}
        para="Showcasing our work across various styles and spaces.
         Each project reflects our passion for detail and our
          commitment to bringing your vision to life."
      />

      <section>
        <div className="second-section">
          <div className="mb-5">
            <div className="design-list">
              <li
                onClick={() => setSelectedCategory("showAll")}
              >
                {" "}
                Show All{" "}
              </li>
              <li onClick={() => setSelectedCategory("Architecture")}>
                Architecture
              </li>
              <li onClick={() => setSelectedCategory("Facade")}>facade</li>
              <li onClick={() => setSelectedCategory("Interior")}>interior</li>
              <li onClick={() => setSelectedCategory("Landscape")}>Landscape</li>
              <br />
            </div>
            <div className="list-inside-list">
              {ProjectJson.filter((item) => item.category === selectedCategory).map(
                (value, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedSubCategory(value.subCategory)}
                    className="list-item-transition"
                  >
                    {value.subCategory}
                  </li>
                )
              )}
            </div>
          </div>
          <div className="grid-section">
            <div className="row">
              {Portfolidata.filter(item => selectedCategory !== "showAll" ? item.category === selectedCategory : item).map((value, i) => (
                <div className="col-lg-4 mt-3 col-md-4 project-main">

                  <NavLink to={value.slugs}>
                    <div className="inner-card">
                      <div>
                        <img
                          className="project-card-images"
                          src={value.imagesList[0]}
                          alt="card"
                        />
                      </div>
                      <div className=" project-para">
                        <p className="">
                          <label className="card-title">
                            {value.title}
                          </label>
                          <br />

                        </p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
