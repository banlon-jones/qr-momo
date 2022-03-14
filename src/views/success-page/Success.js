import React from 'react';
import { NavLink } from 'react-router-dom';
import shield from '../../images/bi_shield-fill-check.svg';
import BtnPrimary from '../../components/buttons/Btn-primary';

const Success = () => (
  <div className="container mt-4">
    <div className="text-center mt-4">
      <img src={shield} alt="checked shield" />
    </div>
    <div className="text-center mt-2">
      <h2> success </h2>
    </div>
    <div className="text-center mt-2">
      <p>
        You have successfully registered to our app
      </p>
    </div>
    <div className="text-center mt-4">
      <NavLink to="/sign-in">
        <BtnPrimary value="Start" />
      </NavLink>
    </div>
  </div>
);

export default Success;
