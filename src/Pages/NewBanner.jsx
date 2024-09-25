import React from 'react'
import { } from "../Css/NewBanner.css";

const NewBanner = ({ title, imgURL, para }) => {
  return (
    <>
      <div className='main-newBanner second-section' style={{ backgroundImage: `url("`+imgURL+`")` }}>
        <div className='main-card-newBanner '>
          <div className='titleCard-newBanner '>
            <h3> {title} </h3>
            <p>{para}

            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default NewBanner