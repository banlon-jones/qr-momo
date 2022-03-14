import React from 'react';
import { NavLink } from 'react-router-dom';
import PublicNavbar from '../../components/navbar/Public-Navbar';
import logo from '../../images/logo.png';
import SigninForm from '../../components/signin/SigninForm';

const Login = () => (
  <div>
    <PublicNavbar />
    <div className="flex-row">
      <div className="text-center hide-m">
        <img src={logo} alt="logo" height="200" />
        <div>
          <h2> QR MOMO </h2>
        </div>
      </div>
      <div>
        <div className="container mt-2">
          <h3 className="text-center"> Login </h3>
          <p className="text-center">
            Have no account yet ?
            <NavLink to="/register"> register </NavLink>
          </p>
        </div>
        <div className="container mt-2">
          <SigninForm />
        </div>
      </div>
    </div>
  </div>
);

export default Login;
