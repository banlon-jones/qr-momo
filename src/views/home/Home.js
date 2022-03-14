import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import BtnSecondary from '../../components/buttons/btn-secondary';
import BtnPrimary from '../../components/buttons/Btn-primary';

const Home = () => (
  <div>
    <div className="container mt-4">
      <div className="logo-center">
        <img className="logo-center" src={logo} alt="QR momo logo" height="150" />
      </div>
      <div className="title">
        <h3> QR MOMO </h3>
      </div>
      <div className="text-center mt-2">
        <h1> Lets get started </h1>
      </div>
      <div className="text-center text-light">
        <p> Never a better time than now. Fasten your checkout process for your customers. </p>
      </div>
      <div className="container mt-4 text-center">
        <NavLink to="/register">
          <BtnPrimary value=" Create Account " />
        </NavLink>
        <br />
        <NavLink to="/sign-in">
          <BtnSecondary value="Login to Account" />
        </NavLink>
      </div>
    </div>
  </div>
);

export default Home;
