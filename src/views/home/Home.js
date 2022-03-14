import React from 'react';
import logo from '../../images/logo.png';
import BtnPrimary from '../../components/buttons/Btn-primary';
import BtnSecondary from '../../components/buttons/btn-secondary';

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
        <p> Never a better time than now. Fasten your checkout process make your customers. </p>
      </div>
      <div className="container mt-4">
        <div>
          <BtnPrimary value="Create Account" />
        </div>
        <br />
        <div>
          <BtnSecondary value="Login to Account" />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
