import React from 'react';
import { NavLink } from 'react-router-dom';
import PublicNavbar from '../../components/navbar/Public-Navbar';
import logo from '../../images/logo.png';
import SigninForm from '../../components/signin/SigninForm';

const Login = () => (
  <div>
    <PublicNavbar />
    <div className="container mt-md-5">
      <div className="row pt-md-5">
        <div className="col-md-6 hide-m">
          <div className="text-center">
            <div>
              <p>
                Welcome to
                <h3> QR momo </h3>
              </p>
            </div>
            <img src={logo} alt="logo" height="200" />
            <div>
              <h2> QR MOMO </h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="bg-gray p-5 full-height-m">
            <div className="container mt-2">
              <h3> Login </h3>
              <p className="mt-md-4">
                Have no account yet ?
                <NavLink to="/register"> register </NavLink>
              </p>
            </div>
            <div className="container mt-5">
              <SigninForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
