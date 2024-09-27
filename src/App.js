import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import ExpertiesData from "./Asserts/ExpertiesData";
import Header from './Component/NavBar/Header';
import Home from './Pages/Home';
import FooterPage from './Component/Footer/FooterPage';
import DesignProcess from "./Pages/DesignProcess";
import About from './Pages/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Project from './Pages/Project';
import Experties from './Pages/Experties';
import Services from './Pages/Services';
import MeetTheTeam from './Pages/MeetTheTeam';
import Careers from './Pages/Careers';
import AboutTheFirm from './Pages/AboutTheFirm';
import WhatWeBringeThTheTable from './Pages/WhatWeBringeThTheTable';
import ContactUs from './Pages/ContactUs';
import Blog from './Pages/Blog';
import ProjectGallery from './Pages/ProjectGallery';
import ProjectData from "./Asserts/Project";
import PortfolioData from "./Asserts/PortfolioData";
import AllExperties from './Pages/AllExperties';
import DesignElement from './Pages/DesignElement';
import Loader from './Pages/Loader';
import { Fade } from 'react-reveal'; // Import Fade effect from react-reveal
import PortfolioGallery from './Pages/PortfolioGallery';
import Portfolidata from './Asserts/Portfolidata';



function App() {
  const [ loading, setLoading] = useState(true)
  useEffect(()=>{
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);
    return () => clearTimeout(timer);

  },[])
  return (
    <div className="App">
      <div className={`content ${loading ? 'loading' : ''}`}>
    {/* <Fade when={!loading} duration={500}> 
        <Loader />
      </Fade> */}

    
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Project /> } />

          {/* <Route path='/experties' element={<Experties />} /> */}
          <Route path='/About' element={<About />} />
          <Route path='/services' element={<Services />} />
          {/* {ExpertiesData.map((v,i)=>{
            return(
              <> 
                <Route path={v.slug} element={<Experties />} />
              </>
            )
          })} */}
          <Route path='/experties' element={<Experties />} />
         {/* {ProjectData.map((v,i)=>(
          v.lists.map((e) =>(
            e.imgesCards.map((r)=>(
              <Route path={"/portfolio"+r.slugs} element={<ProjectGallery />} />

            ))
          ))
         ))} */}
         <Route path='/experties' element={<Experties />} />
         {/* {ProjectData.map((v,i)=>(
          
            <Route path={v.slugs} element={<PortfolioGallery />} />
        
         ))} */}
         {Portfolidata.map((v,i)=>(
          
          <Route path={v.slugs} element={<PortfolioGallery />} />
      
       ))}
         <Route path='/design-element' element={<DesignElement />} />
         <Route path='/the-studio' element={<AllExperties />}  />
          <Route path='/blog' element={<Blog />} />
          <Route path='/aboutTheFirm' element={<AboutTheFirm />} />
          <Route path='/designProcess' element={<DesignProcess />} />
          <Route path='/whatWeBringToTheTable' element={<WhatWeBringeThTheTable />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/projectGallery' element={<ProjectGallery />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/meetTheTeam' element={<MeetTheTeam />} />
          <Route path='/portfolio-gallery' element={<PortfolioGallery />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </div>
    {loading && <Loader />}
    </div>
    // <div className="App">
    //   {loading? <Loader /> :<BrowserRouter>
    //     <Header />
    //     <Routes>
    //       <Route path='/' element={<Home />} />
    //       <Route path='/portfolio' element={<Project/> } />

    //       {/* <Route path='/experties' element={<Experties />} /> */}
    //       <Route path='/About' element={<About />} />
    //       <Route path='/services' element={<Services />} />
    //       {/* {ExpertiesData.map((v,i)=>{
    //         return(
    //           <> 
    //             <Route path={v.slug} element={<Experties />} />
    //           </>
    //         )
    //       })} */}
    //       <Route path='/experties' element={<Experties />} />
    //      {ProjectData.map((v,i)=>(
    //       v.lists.map((e) =>(
    //         e.imgesCards.map((r)=>(
    //           <Route path={"/portfolio"+r.slugs} element={<ProjectGallery />} />

    //         ))
    //       ))
    //      ))}
    //      <Route path='/design-element' element={<DesignElement />} />
    //      <Route path='/the-studio' element={<AllExperties />}  />
    //       <Route path='/blog' element={<Blog />} />
    //       <Route path='/aboutTheFirm' element={<AboutTheFirm />} />
    //       <Route path='/designProcess' element={<DesignProcess />} />
    //       <Route path='/whatWeBringToTheTable' element={<WhatWeBringeThTheTable />} />
    //       <Route path='/careers' element={<Careers />} />
    //       <Route path='/projectGallery' element={<ProjectGallery />} />
    //       <Route path='/contactUs' element={<ContactUs />} />
    //       <Route path='/careers' element={<Careers />} />
    //       <Route path='/meetTheTeam' element={<MeetTheTeam />} />
    //     </Routes>
    //     <FooterPage />
    //   </BrowserRouter>}
    // </div>
    
);
}

export default App;
