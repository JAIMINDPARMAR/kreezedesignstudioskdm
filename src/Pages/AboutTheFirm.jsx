import React from "react";
import { MainBanner } from "./MainBanner";
import banner from "../Images/Home/1 (8).webp";

const AboutTheFirm = () => {
  return (
    <>
      <MainBanner
        title="About The Firm"
        imgURL={banner}
        para="Spoin eravida gibh sel velit tuctor aliquet. Aenean dyfi iysda asslicikoi tudin lorem quis bibendum auctor"
      />
      <section>
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h2> At Kreeze,</h2>
              <p>
                we believe that architecture has the power to shape the world we
                live in. We are a team of passionate architects and designers
                who are committed to creating innovative and sustainable
                solutions that enhance the built environment. Our approach to
                design is collaborative, and we work closely with our clients to
                understand their needs and aspirations. We have a proven track
                record of delivering high-quality projects across a range of
                sectors, including residential, commercial, and hospitality. Our
                team comprises of experienced directors and architects who bring
                a wealth of knowledge and expertise to every project we
                undertake. If you're looking for a team that is dedicated to
                excellence in design and committed to making a positive impact
                on the world, look no further than Kreeze.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://dessau.qodeinteractive.com/wp-content/uploads/2018/05/h1-port-img-5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutTheFirm;
