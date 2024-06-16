import React from 'react';
import "./ApartmentGrid.css";
import Apartment from './Apartment';
import { useState } from 'react';
import {useEffect} from 'react';

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);
  function fetchApartments() {
    fetch ("db.json")
    .then((res) => res.json())
    .then((res) => setApartments(res))
    .catch(console.error);
  }
   return (
    <div className='grid'>
      {apartments.map((apartment) => {
        return <Apartment title={apartment.title} imageUrl={apartment.cover} id={apartment.id} key={apartment.id}/>
      })}
    </div>
  )
}

export default ApartmentGrid;