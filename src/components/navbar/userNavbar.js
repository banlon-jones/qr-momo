import React from 'react';
import { useSelector } from 'react-redux';
import img from '../../images/Cameroon.jpg';
import bars from '../../images/fa-solid_bars.svg';

const UserNavbar = () => {
  const username = useSelector((state) => state.user.user.displayName.split('/'));
  console.log(username[0]);

  return (
    <div className="mt-5">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <img src={img} className="rounded-circle" alt="user dp" height="50" width="50" />
            <span>
              Hello,
              {` ${username[0]}`}
            </span>
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
