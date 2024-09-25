import React from "react";
import "../Css/Experties.css";
import { PiPlusThin } from "react-icons/pi";
import about from "../Images/About/about image.jpg";
import ExpertiesData from "../Asserts/ExpertiesData";
import { useLocation } from "react-router-dom";
import { MainBanner } from "./MainBanner";
import banner from "../Images/Home/Eacade.jpg";
import TitleSection from "./TitleSection";
import Services from "./Services";
import NewBanner from "./NewBanner";
import GetInTouch from "../Asserts/GetInTouch";

const Experties = () => {
  const serach = useLocation();
  const path = serach.pathname;
  // console.log(path);
  const eventF = ExpertiesData.find((elm) => elm.slug === path);
  //   console.log(eventF);
  const product1 =
    "https://dessau.qodeinteractive.com/wp-content/uploads/2018/05/h2-port-img-1.jpg";
  const product2 =
    "https://dessau.qodeinteractive.com/wp-content/uploads/2018/05/h2-port-img-2.jpg";
  const product3 =
    "https://dessau.qodeinteractive.com/wp-content/uploads/2018/05/h2-port-img-3.jpg";
  const product4 =
    "https://dessau.qodeinteractive.com/wp-content/uploads/2018/05/h2-port-img-4.jpg";
  const product5 =
    "https://dessau.qodeinteractive.com/wp-content/uploads/2018/05/h2-port-img-5.jpg";

  return (
    <>
      <NewBanner
        title="Experties"
        imgURL={banner}
        para="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a ."
      />
      {/* <MainBanner
        title='Experties'
        imgURL={banner}
        para='Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.'
      /> */}
      <TitleSection
        title="What We Do"
        titlePara="Here at Kreeze, we take a blank canvas and turn it into something beautiful,
         useful for interiors that express your individual style. From inception to completion,
          our skilled staff works in tandem with you to make sure every aspect fulfills your
           vision and is beyond your expectations. Kreeze realizes your ideal environments with
            an inventive design enthusiasm and a quality-driven approach.
"
      />
      <Services />
      {/* {ExpertiesData.map((v,i)=>(
        <>
        
      <section className="">
        <div className="container ">
          <div className="experties-section-1-overlay-section">
           
            <div>
              <div className="row">
              <TitleSection
        title={v.titleName}
        titlePara={v.description}
      />
                {v.imageCard.map((v, i) => {
                  return (
                    <>
                  
                    <div className='col-md-4'>
                    
                            <div className='experties-section-2-card-con'>
                                <div className='experties-section-2-card-body'>
                                    <img src={v.cardImg} alt='team1' />
                                    <div className='experties-section-2-card-details'>
                                        <h3>{v.cardName}</h3>
                                        <div className='about-section-card-social-media-con'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      ))} */}
      <section className="">
        <TitleSection
          title="Product"
          titlePara="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor"
        />
        <div className="container ">
          <div className="experties-section-1-overlay-section">
            <div>
              <div className="row">
                {/* <TitleSection
        title={v.titleName}
        titlePara={v.description}
      /> */}
                {/* {v.imageCard.map((v, i) => {
                  return (
                    <> */}
                <div className="col-md-4">
                  <div className="experties-section-2-card-con">
                    <div className="experties-section-2-card-body">
                      <img src={product1} alt="team1" />
                      <div className="experties-section-2-card-details">
                        <h3>qwerty</h3>
                        <div className="about-section-card-social-media-con"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="experties-section-2-card-con">
                    <div className="experties-section-2-card-body">
                      <img src={product2} alt="team1" />
                      <div className="experties-section-2-card-details">
                        <h3>Product 2</h3>
                        <div className="about-section-card-social-media-con"></div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-md-4">
                  <div className="experties-section-2-card-con">
                    <div className="experties-section-2-card-body">
                      <img src={product3} alt="team1" />
                      <div className="experties-section-2-card-details">
                        <h3>Product 3 </h3>
                        <div className="about-section-card-social-media-con"></div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-md-4">
                  <div className="experties-section-2-card-con">
                    <div className="experties-section-2-card-body">
                      <img src={product4} alt="team1" />
                      <div className="experties-section-2-card-details">
                        <h3>Product 4</h3>
                        <div className="about-section-card-social-media-con"></div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="col-md-4">
                  <div className="experties-section-2-card-con">
                    <div className="experties-section-2-card-body">
                      <img src={product5} alt="team1" />
                      <div className="experties-section-2-card-details">
                        <h3>Product 5</h3>
                        <div className="about-section-card-social-media-con"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* </>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};

export default Experties;
