import React from 'react';
import { NavLink } from 'react-router-dom';
import PublicNavbar from '../../components/navbar/Public-Navbar';
import SignupForm from '../../components/signup/SignupForm';
import logo from '../../images/logo.png';

const Register = () => (
  <div>
    <PublicNavbar />
    <div className="container-md mt-md-5">
      <div className="row">
        <div className="col-md-6 col-12 hide-m">
          <div className="text-center hide-m">
            <img src={logo} alt="logo" height="200" />
            <div>
              <h2> QR MOMO </h2>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 m-0 p-0">
          <div className="container p-5 bg-gray rounded-3 full-height-m">
            <SignupForm />
            <div className="text-center mt-2">
              <NavLink className="text-primary" to="/sign-in"> I have an Account, Sign in  </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Register;
