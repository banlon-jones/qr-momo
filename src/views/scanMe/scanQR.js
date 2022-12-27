import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './scan.css';
import { useSelector } from 'react-redux';
import UserNavbar from '../../components/navbar/userNavbar';
// import Iframe from '../../components/iframe/iframe';
import mtn from '../../images/momo-logo.png';
import orange from '../../images/orangeLogo.png';

const ScanQR = () => {
  const { channel, amount } = useParams();
  const phone = useSelector((state) => state.user.user.displayName.split('/'));

  // eslint-disable-next-line consistent-return
  const generateCode = () => {
    if (channel === 'mtn') {
      return `tel:*126*9*${phone[1]}*${amount}#`;
    }
    if (channel === 'orange') {
      return 'tel:#150#';
    }
    return 'no channel selected';
  };
  return (
    <div>
      <UserNavbar />
      <div className="container mt-md-5">
        <div className="row flex-m">
          <div className="col-md-6 col-12 p-md-5 mt-md-5 mt-5 p-0">
            <div className="card-body bg-blue rounded-5">
              <p className=" text-white text-center p-5">
                customer should scan the QR code above
                to make payment directly to vendor’s
                account
              </p>
              <div className="bg-dark-blue p-5 m-0 rounded-5">
                <div className="row">
                  <div className="text-white col-6">
                    <p> Total </p>
                    <p>
                      <strong>
                        { `${amount} CFA` }
                      </strong>
                    </p>
                  </div>
                  <div className="col-6">
                    <NavLink className="btn bg-white" type="button" to="/dashboard"> change price </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 ">
            <div>
              <div className="text-center">
                <img src={(channel === 'mtn') ? mtn : orange} alt="payment channel logo" />
                <h1>
                  {
                    (channel === 'mtn' || channel === 'orange') ? 'SCAN ME' : 'NO PAYMENT CHANNEL SELECTED DO NOT SCAN'
                  }
                </h1>
              </div>
              <div className="text-center">
                <img
                  className="img-fluid"
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${generateCode()}`}
                  alt="qr code"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanQR;
