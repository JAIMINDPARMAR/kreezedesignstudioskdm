import React from 'react'
import './../Css/TitleSection.css'
import { Fade, Slide } from 'react-reveal'
const TitleSection = ({title, titlePara}) => {
  return (
    <section>
    <div className='container'>
        <div className='title-section'>
        <Slide left>
        <h2>{title} </h2>
            <p>{titlePara} </p>
        </Slide>
            
        </div>
    </div>
</section>
  )
}

export default TitleSection