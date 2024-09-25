import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import '../Css/PorfolioParticularGallery.css'
import { Image } from 'antd';
import Portfolidata from '../Asserts/Portfolidata';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import PortfolioData from "../Asserts/PortfolioData.json";

// import './styles.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useLocation } from 'react-router-dom';

const PorfolioParticularGallery = ({ projectObj }) => {
  const path = useLocation()
  const search = path.pathname;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const filterv= Portfolidata.find((value)=>value.slugs===search)
  

  
  return (
    Portfolidata.filter(value => value.slugs === search).map((valueData, i)=>(
      
      <section> 
        <div className=''>
          <div className='row'>
            <Image.PreviewGroup>
              <div className='col-md-10'>
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                 
                    <SwiperSlide>
                     <Image
                        className='particular-img'
                        //   width={200}
                        src={valueData.imagesList[0]}
                      />
                    </SwiperSlide>
                  

                </Swiper>
                
                
              </div>
              <div className='col-md-2'>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper multiple-images"
                >

                    { valueData.imagesList.slice(1,5).map((v,i)=>{
                      
                      
                      return(
                      <Image
                        className=''
                        //   width={200}
                        src={v}
                      />)}
                    )}

                </Swiper>
              </div>

            </Image.PreviewGroup> : <></>
          </div>
        </div>
      </section>
    ))
  )
}

export default PorfolioParticularGallery