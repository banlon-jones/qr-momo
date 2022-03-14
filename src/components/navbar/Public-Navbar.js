import React from 'react';
import { NavLink } from 'react-router-dom';
import backIcon from '../../images/ic_baseline-arrow-back-ios-new.svg';
import './navbar.css';

const PublicNavbar = () => (
  <nav>
    <NavLink to="/">
      <img src={backIcon} alt="back icon" />
      back
    </NavLink>
  </nav>
);

export default PublicNavbar;
