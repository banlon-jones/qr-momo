import React from 'react';
import backIcon from '../../images/ic_baseline-arrow-back-ios-new.svg';
import './navbar.css';

const PublicNavbar = () => (
  <nav>
    <div>
      <img src={backIcon} alt="back icon" />
      back
    </div>
  </nav>
);

export default PublicNavbar;
