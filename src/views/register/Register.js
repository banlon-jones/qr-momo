import React from 'react';
import PublicNavbar from '../../components/navbar/Public-Navbar';
import SignupForm from '../../components/signup/SignupForm';

const Register = () => (
  <div>
    <PublicNavbar />
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
);

export default Register;
