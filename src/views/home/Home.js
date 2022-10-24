import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import BtnSecondary from '../../components/buttons/btn-secondary';
import BtnPrimary from '../../components/buttons/Btn-primary';

const Home = () => (
  <div>
    <div className="mt-5 text-center">
      <div className="mt-5 logo-center">
        <img className="logo-center" src={logo} alt="QR momo logo" height="150" />
      </div>
      <div className="title">
        <h3> QR MOMO </h3>
      </div>
      <div className="text-center mt-3">
        <h1> Lets get started </h1>
      </div>
      <div className="text-center">
        <p className="mt-5 p-4">
          Never a better time than now. Fasten your checkout
          process make your customers.
        </p>
      </div>
      <div className="container mt-5 text-center">
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
