import React, { useState } from "react";
import DesignProcessData from "../Asserts/DesignProcessData";
import "../Css/Services.css";
import Accordion from "react-bootstrap/Accordion";
import { PiPlusThin } from "react-icons/pi";
// import MainBanner from "../Pages/MainBanner.jsx";
import banner from "../Images/Home/1 (9).webp";
import { MainBanner } from "./MainBanner";
import TitleSection from "./TitleSection";

const DesignProcess = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
   <>
   {/* <section  style={{background:"rgb(211, 211, 211)"}}> */}
   <TitleSection title='Design Process' titlePara='"Step-by-Step to Stunning: Experience Our Design Process."
' />

   {/* </section> */}
    {/* <MainBanner title="Design Process" imgURL={banner} para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor" /> */}
     {/* <MainBanner title="Meet The Team" imgURL={banner} para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor" /> */}
    {/* <MainBanner /> */}
<section>
  <div className="my-5">
    <Accordion>
   
      {DesignProcessData.map((v,i)=>{
        return(
            <>
            <Accordion.Item  eventKey={i}>
      <hr />
        <Accordion.Header className="container">
          {" "}
          <h2 className="text-muted accordion-title"> {v.titleName}</h2>
        </Accordion.Header>
        <Accordion.Body className="container">
       
          <div className="row">
            <div className="col-md-6">
              <div className="service-grid-left">
              {/* <h2 > {v.subTitle}</h2> */}
              <p className="service-para text-muted">
                {v.servicePara}
              </p>
              <div className="service-section-page-plus-btn">
                <div className="service-section-svg-overlay-btn-con">
                  <div className="service-section-overlay-btn text-white">
                    <PiPlusThin />
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  className="w-100"
                  src="https://dessau.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-3.jpg"
                />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
            </>
        )
      })}
   
      {/* <Accordion.Item  eventKey="1">
        <Accordion.Header className="container">
          {" "}
          <h2> Services</h2>
        </Accordion.Header>
        <Accordion.Body className="container">
       
          <div className="row">
            <div className="col-md-6">
              <div className="service-grid-left">
              <h2> Consulation</h2>
              <p className="service-para text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla
              </p>
              <div className="service-section-page-plus-btn">
                <div className="service-section-svg-overlay-btn-con">
                  <div className="service-section-overlay-btn text-white">
                    <PiPlusThin />
                  </div>
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img
                  className="w-100"
                  src="https://dessau.qodeinteractive.com/wp-content/uploads/2018/05/h1-img-3.jpg"
                />
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item> */}
    </Accordion>
  </div>
</section>
   </>
  );
};

export default DesignProcess;
