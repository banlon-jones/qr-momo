import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserNavbar from '../../components/navbar/userNavbar';
import mtn from '../../images/momo-logo.png';
import orangelogo from '../../images/orangeLogo.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [channel, setChannel] = useState('mtn');
  const amountInput = useRef('0');
  const onSubmit = (e) => {
    e.preventDefault();
    const amount = amountInput.current.value;
    navigate(`/scan/${channel}/${amount}`);
  };
  return (
    <div>
      <div>
        <UserNavbar />
      </div>
      <div className="text-center my-5">
        <h1> Generate QR code </h1>
      </div>
      <div className="container">
        <div className="text-center my-5">
          Select your payment channel
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <input
              onInput={() => setChannel('mtn')}
              className="form-check-input"
              type="radio"
              name="platform"
              value="mtn"
              checked
            />
            <img className="px-md-5" src={mtn} alt="mtn momo logo" />
          </div>
          <div>
            <input
              onInput={() => setChannel('orange')}
              className="form-check-input"
              type="radio"
              name="platform"
              value="orange"
              disabled
            />
            <img className="px-md-5" src={orangelogo} alt="orange momo logo" />
          </div>
        </div>
      </div>
      <div className="container pt-5">
        <form action="">
          <div>
            <span> Enter amount </span>
            <br />
            <input ref={amountInput} type="number" name="amount" className="form-control" />
          </div>
          <div className="text-center mt-5">
            <button onClick={onSubmit} className="btn btn-primary w-100" type="button"> Request payment  </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
