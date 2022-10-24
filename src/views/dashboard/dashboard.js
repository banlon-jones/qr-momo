import React from 'react';
import UserNavbar from '../../components/navbar/userNavbar';
import mtn from '../../images/momo-logo.png';
import orangelogo from '../../images/orangeLogo.png';

const Dashboard = () => {
  console.log('hello');
  return (
    <div>
      <div>
        <UserNavbar />
      </div>
      <div className="text-center my-5">
        <h1> Your QR code </h1>
      </div>
      <div className="container">
        <div className="d-flex justify-content-md-between">
          <div>
            <input className="form-check-input m-md-4" type="radio" name="platform" value="mtn" checked />
            <img src={mtn} alt="mtn momo logo" />
          </div>
          <div>
            <input className="form-check-input m-md-4" type="radio" name="platform" value="orange" />
            <img src={orangelogo} alt="orange momo logo" />
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        Select your payment channel
      </div>
      <div className="container">
        <form action="">
          <div>
            <span> Enter amount </span>
            <br />
            <input type="number" name="amount" className="form-control" />
          </div>
          <div className="text-center mt-5">
            <button className="btn btn-primary w-100" type="button"> Request payment  </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
