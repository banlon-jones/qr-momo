import React from 'react';
import PublicNavbar from '../../components/navbar/Public-Navbar';
import SignupForm from '../../components/signup/SignupForm';
import logo from '../../images/logo.png';

const Register = () => (
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
          <h3> Registration </h3>
          <p>
            Enter your validate name and MTN mobile money account number
          </p>
        </div>
        <div className="container mt-2">
          <SignupForm />
        </div>
      </div>
    </div>
  </div>
);

export default Register;
