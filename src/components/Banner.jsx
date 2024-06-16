import React from 'react';
import "./Banner.css";
import bannerImg from '../assets/IMG.png'; 

function Banner() {
  return (
    <div className='banner' style={{ backgroundImage: `url(${bannerImg})` }} >
        <h2>Chez vous, partout et ailleurs</h2>
        <div className='backdrop'></div>
    </div>
  )
}

export default Banner;