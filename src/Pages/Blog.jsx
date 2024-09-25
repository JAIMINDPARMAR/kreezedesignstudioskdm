import React from "react";
import "../Css/Blog.css";
import BlogData from "../Asserts/BlogData";
import banner from "../Images/Home/Home(6).jpg";
import { BsArrowRight } from "react-icons/bs";

import { MainBanner } from "./MainBanner";
import { Fade, Zoom } from "react-reveal";
const Blog = () => {
  return (
    <>
      <MainBanner
        title="Blogs"
        imgURL={banner}
        para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor"
      />
      <section>
        <div className="container">
          <div className="row">
            {BlogData.map((v, i) => {
              return (
                <>
                  <div className="col-md-4 col-sm-6 col-xm-12 main-card">
                    <Fade>
                      <Zoom>
                      <div className="card ">
                      <img
                        src="https://picsum.photos/200/300"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text card-para">{v.desc}</p>
                        <div className="main-btn-1">
                          <button className="blog-button" id="btn-submit">
                            <span className="blog-button-text">
                              View More{" "}
                              <label>
                                {" "}
                                <BsArrowRight />{" "}
                              </label>{" "}
                            </span>
                            <div className="blog-button-loader">
                              <div />
                              <div />
                              <div />
                            </div>
                          </button>
                        </div>
                        {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a> */}
                      </div>
                    </div>
                      </Zoom>
                    </Fade>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
