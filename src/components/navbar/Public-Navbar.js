import React from 'react';
import { NavLink } from 'react-router-dom';
import backIcon from '../../images/ic_baseline-arrow-back-ios-new.svg';
import './navbar.css';

const PublicNavbar = () => (
  <nav>
    <NavLink className="text-decoration-none text-black p-2" to="/">
      <img src={backIcon} alt="back icon" className="px-1" />
      back
    </NavLink>
  </nav>
);

export default PublicNavbar;
