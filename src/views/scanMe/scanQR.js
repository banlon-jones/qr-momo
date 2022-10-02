import React from 'react';
import { NavLink } from 'react-router-dom';
import './scan.css';
import UserNavbar from '../../components/navbar/userNavbar';

const ScanQR = () => {
  console.log('jones');
  return (
    <div>
      <UserNavbar />
      <div className="container mt-md-5">
        <div className="row">
          <div className="col-md-6 col-12 p-md-5 mt-md-5 m-0 p-0">
            <div className="card-body bg-blue rounded-5">
              <p className=" text-white text-center p-5">
                customer should scan the QR code above
                to make payment directly to vendor’s
                account
              </p>
              <div className="bg-dark-blue p-5 m-0 rounded-top">
                <div className="row">
                  <div className="text-white col-6">
                    <p> Total </p>
                    <p>
                      <strong> 6000 CFA </strong>
                    </p>
                  </div>
                  <div className="col-6">
                    <NavLink className="btn bg-white" type="button" to="/dashboard"> change price </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 hide-m">
            <div> hello </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanQR;
