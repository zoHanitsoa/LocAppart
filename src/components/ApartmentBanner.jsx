import React from 'react';
import { useState } from "react";
import './ApartmentBanner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import arrowright from "../assets/arrow_forward2.png";
import arrowleft from "../assets/arrow_back2.png";

function ApartmentBanner(props) {
  const pictures = props.pictures;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPicture = () => {
    if (currentIndex === pictures.length - 1) {
      return setCurrentIndex(0)
    }
    return setCurrentIndex(currentIndex + 1)
  }

  const previousPicture = () => {
    if (currentIndex === 0) {
      return setCurrentIndex(pictures.length - 1)
    }
    return setCurrentIndex(currentIndex - 1)
  }
  return (

    <div className='apartmentBanner'>
      <img src={pictures[currentIndex]} alt='picture'></img>
      <span className='compteur'>{currentIndex + 1}/{pictures.length}</span>
      {pictures.length > 1 &&
        <>
          <span onClick={previousPicture} className='previous'><img src={arrowleft} alt='arrow-back' /></span>
          <span onClick={nextPicture} className='next'><img src={arrowright} alt='arrow-forward' /></span>
        </>
      }
    </div>
  );
}

export default ApartmentBanner;