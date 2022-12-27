import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../../store/firebase/firebaseReducer';
import img from '../../images/Cameroon.jpg';
import bars from '../../images/fa-solid_bars.svg';

const UserNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logOutUser());
    navigate('/sign-in');
  };

  return (
    <div className="mt-5">
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <img src={img} className="rounded-circle" alt="user dp" height="50" width="50" />
            <span>
              Hello
            </span>
          </div>
          <div className="dropdown">
            <div
              className="pt-2 btn dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={bars} alt="menu" />
            </div>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" type="button" onClick={onLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNavbar;
