import React from 'react';
import './Apartment.css';
import './ApartmentGrid.css';
import { Link } from 'react-router-dom';

function Apartment(props) {
  return (
    <Link to={`/flat/${props.id}`} className='link'>
      
      <div className='apartment'>
        <div className='backdrop'></div>
        <div className='apartment_image' style={{ backgroundImage: `url(${props.imageUrl})` }}>
          <span className='title'>{props.title}</span>
        </div>
      </div>
    </Link>
  
  )
}
export default Apartment;
