import React, { useState } from 'react';
import './DescriptionPanel.css';
import arrow from "../assets/arrow_back.png"

function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  }
  return (
    <div className='apartment_description about'>
      <p className='description_header' onClick={showContent}>
        <span>{props.title}</span>
        <span className='vector' ><img src={arrow} alt='Vector' className={isContentVisible ? "open" : ""}/></span>
      </p>
      <p className={`description_content ${isContentVisible ? "isOpen" : "isClosed"}`}>{props.content}</p>
    </div>

  )
}

export default DescriptionPanel;