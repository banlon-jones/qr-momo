import React from 'react';
import logo from '../../images/logo.png';
import spinner from '../../images/loading.gif';
import './loader.css';

const Loader = () => {
  return (
    <div>
      <div className="container cont">
        <div className="logo-center">
          <img className="logo-center" src={logo} alt="QR momo logo" height="150"/>
        </div>
        <div className="title">
          <h2> QR MOMO </h2>
        </div>
        <div className="logo-center">
          <img src={spinner} alt="spinner" height="100" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
