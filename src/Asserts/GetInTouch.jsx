import React, { useEffect } from 'react'
import Typed from 'typed.js';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import "../Css/GetInTouch.css";
const GetInTouch = ({ img }) => {
  useEffect(() => {
    const options = {
      strings: ["", "Connect", "Reach out", "Share ideas", "Collaborate", "Let's chat"],
      typeSpeed: 100,
      backSpeed: 40,
      loop: true,
    };

    const typing = new Typed(".text-main", options);

    return () => {
      typing.destroy();
    };
  }, []);
  return (
    <>
      <section className="">
        {/* <div className="container">
        <div className="about-arrow"> 
              <Link to='/contact-us'>
              <h5 className="all-arrow"> Conatct Us <GoArrowUpRight /> <p>  <hr /></p> </h5>

              </Link>
               
            </div>
          <div>
            <h2 className="section-title">Get in Touch</h2>
          </div>
          <div className="mb-4">
            <h2 className="title-subtile">
              {" "}
              Building Relationships, One Conversation at a Time

            </h2>
          </div>
        
        </div> */}
        <div className="service-get-in-touch" >
          <div className="service-get-in-touch-para">
            <h2 className="text-white service-get-in-touch-title">Get In Touch </h2>
            <p className="text-white fs-4">Do not hesitate to say <label className="text-main"></label>  </p>
            <a href='tel:9833985889'>
              <button className="btn service-get-in-touch-btn">
                Let's Talk <GoArrowUpRight />
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetInTouch