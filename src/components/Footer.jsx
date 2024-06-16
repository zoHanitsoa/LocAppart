import React from 'react';
import './Footer.css';
import logo from "../assets/logo_footer.png";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_logo'>
            <img src={logo} alt='logo' width='120px'/>
        </div>
        <div className='footer_text'>
        © 2020 Kasa All rights reserved
        </div>
    </div>
  )
}

export default Footer;