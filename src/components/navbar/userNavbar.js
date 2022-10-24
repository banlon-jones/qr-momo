import React from 'react';
import img from '../../images/Cameroon.jpg';
import bars from '../../images/fa-solid_bars.svg';

const UserNavbar = () => {
  console.log('hello');
  return (
    <div className="mt-5">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <img src={img} className="rounded-circle" alt="user dp" height="50" width="50" />
            <span> Hello, Gilles </span>
          </div>
          <div className="pt-2">
            <img src={bars} alt="menu" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
