import React from 'react';
import logo from '../../images/logo.png';
import Loader from '../../components/loader/Loader';
import BtnPrimary from '../../components/buttons/Btn-primary';
import BtnSecondary from '../../components/buttons/btn-secondary';

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="logo-center">
          <img className="logo-center" src={logo} alt="QR momo logo" height="150"/>
        </div>
        <div className="title">
          <h3> QR MOMO </h3>
        </div>
        <div className="text-center">
          <h1> Let's get started </h1>
        </div>
        <div className="text-center">
          <p> Never a better time than now. Fasten your checkout process make your customers. </p>
        </div>
        <div>
          <BtnPrimary value={'Create Account'}/>
        </div>
        <div>
          <BtnSecondary value={'Login to Account'} />
        </div>
      </div>
    </div>
  );
};

export default Home;
