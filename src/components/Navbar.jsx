import React from 'react'
import "./Navbar.css";
import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logoRed.png";

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/">
        <div className='navbar_logo'>
          <img src={logo} alt='logo' />
        </div>
      </Link>
      <div className='navbar_details'>
        <NavLink to="/">
          <div className='accueil'>Accueil</div>
        </NavLink>
        <NavLink to='/About'>
          <div className='apropos'>A propos</div>
        </NavLink>
      </div>
    </nav>
  )
};

export default Navbar;