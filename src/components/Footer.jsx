// src/components/Footer.js

import React from 'react';
import './Footer.css';
import CallIcon from '@mui/icons-material/Call';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="image">
          <CallIcon />
          <span>Toll-free-number 1800-123-456</span>
        </div>

      </div>

      <div className="footer-content">
        <div className="image">
          <FacebookRoundedIcon />
          <span>Facebook.com</span>
        </div>
      </div>

      <div className="footer-content">
        <div className="image">
          <LanguageRoundedIcon />
          <span>Website Link</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
