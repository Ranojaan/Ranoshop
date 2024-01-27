import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
         <InstagramIcon /> <XIcon /> <FacebookIcon /> <LinkedInIcon /> 
        
      </div>
      <p> &copy; 2024 Ranoshop.com</p>
      <p> By Ranojaan M</p>
    </div>
  );
}

export default Footer;