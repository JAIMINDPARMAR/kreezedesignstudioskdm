import React, { useEffect, useLayoutEffect, useState } from "react";
import "../Css/PortfolioGallery.css";
import Portfolidata from "../Asserts/Portfolidata";
import PorfolioParticularGallery from "./PorfolioParticularGallery";
import project from "../Asserts/PortfolioData";
import { Image } from 'antd';
import { Link, useLocation } from "react-router-dom";
// import Project from "../Asserts/?Project.jsx";

const PortfolioGallery = ({ imagess }) => {
  const [perticularPorfolioData, setPerticularPorfolioData] = useState([])

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const path = useLocation()
  const search = path.pathname
  const getprojectObject = Portfolidata.filter( v => v.slugs === search)
  const related=Portfolidata.filter( v => v.slugs !== search)
  
  // const spliting = search.split('')


  

  return (
    <>
    
      <section>
      
      
        <div className="container">
        <PorfolioParticularGallery projectObj={getprojectObject.slugs} />
        { getprojectObject.map((value)=>{return(
          <>
          <h2 className="mt-4">{value.title}</h2>
          <div className="row ribbon-row">
            <div className="col-md-3 ">
              <div className="left-line">
                <label className="left-text-ribbon">Category </label>
                <div className="ribbon-tittle">
                  <span className="ribbon-city-name">{value.category}</span>
                </div>
              </div>
              <div className="left-line">
                <label className="left-text-ribbon">Status </label>
                <div className="ribbon-tittle">
                  <span className="ribbon-city-name">Completed</span>
                </div>
              </div>
              <div className="left-line">
                <label className="left-text-ribbon">Kreeze team </label>
                <div className="ribbon-tittle">
                  <span className="ribbon-city-name">Kreeze team</span>
                </div>
              </div>
              <div className="left-line">
                <label className="left-text-ribbon">
                  STRUCTURAL ENGINEERING{" "}
                </label>
                <div className="ribbon-tittle">
                  <span className="ribbon-city-name">Kreeze ARCHITECTS</span>
                </div>
              </div>
              <div className="left-line">
                <label className="left-text-ribbon">INTERIOR DESIGN </label>
                <div className="ribbon-tittle">
                  <span className="ribbon-city-name">Kreeze ARCHITECTS</span>
                </div>
              </div>
              <div className="left-line">
                <label className="left-text-ribbon">LICENCING </label>
                <div className="ribbon-tittle">
                  <span className="ribbon-city-name">Kreeze ARCHITECTS</span>
                </div>
              </div>
              {/* <div className="left-line">
                <label className="left-text-ribbon">VISUALIZATION </label>
                <div className="ribbon-tittle">
                  <span className="ribbon-city-name">SPYROS BOUKAS</span>
                </div>
              </div> */}
            </div>
            <div className="col-md-9">
              <div className="col-right-text">
                <p>
                  {value.desc}
                </p>
                {/* <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content. Lorem ipsum may be used as a placeholder
                  before the final copy is available.
                </p>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content. Lorem ipsum may be used as a placeholder
                  before the final copy is available.
                </p>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content. Lorem ipsum may be used as a placeholder
                  before the final copy is available.
                </p>
                <p>
                  Lorem ipsum is a placeholder text commonly used to demonstrate
                  the visual form of a document or a typeface without relying on
                  meaningful content. Lorem ipsum may be used as a placeholder
                  before the final copy is available.
                </p> */}
              </div>
            </div>
          </div>
          </>)
        })
          }
        </div>
      </section>
      <section>
        <div className="container mb-4">
          <div className="releted-project ">
            <div>
              <span className="releted-text"> Related Projects</span>
            </div>
            <div className="all-projects">
              <div></div>
              <Link to='/portfolio' style={{color:'#1b1b1b'}}>
              <label className="all-project-text"> All Projects</label>
              </Link>
            </div>
          </div>
          <table className="releted-project-table" style={{ width: "100%", position:'relative' }}>
            {/* <tr>
              <th>Firstname</th>
              <th>Lastname</th>
            </tr> */}
             { related.map((val)=>{return(
          <>
            <tr className="table-rows mb-5">
           
              <td>* </td>
              <td><Link to={val.slugs} style={{color:'#1b1b1b'}}>
              {val.title}
              </Link></td>
              <td> </td>
              <td className="last-table-data"></td>
              
            </tr>
            </>)
          })
            }
            
            {/* <div>
              <hr />
            </div> */}
            {/* <tr>
              <td>Lois</td>
              <td>vbn</td>
              <td>bn</td>
              <td>dfghj</td>
            </tr> */}
          </table>
        </div>
      </section>
    </>
  );
};

export default PortfolioGallery;
