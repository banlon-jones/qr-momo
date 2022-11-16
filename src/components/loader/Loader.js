import React from 'react';
import logo from '../../images/logo.png';
import spinner from '../../images/loading.gif';
import './loader.css';

const Loader = () => (
  <div className="cover">
    <div className="text-center">
      <div className="container mt-5 pt-5">
        <div className="logo-center mt-5">
          <img className="logo-center" src={logo} alt="QR momo logo" height="150" />
        </div>
        <div className="title">
          <h2> QR MOMO </h2>
        </div>
        <div className="logo-center">
          <img src={spinner} alt="spinner" height="200" />
        </div>
      </div>
    </div>
  </div>
);

export default Loader;
