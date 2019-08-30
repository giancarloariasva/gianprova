import React from 'react'
import './AllSlides.css'
import SlideA from '../SlideA/SlideA'
import SlideB from '../SlideB/SlideB'
import SlideC from '../SlideC/SlideC'

function AllSlides() {
  return (
    <React.Fragment>
      <div className="outer-wrapper">
        <div className="wrapper">
          <SlideA />
          <SlideB />
          <SlideC />
        </div>
      </div>
    </React.Fragment>
  )
}

export default AllSlides