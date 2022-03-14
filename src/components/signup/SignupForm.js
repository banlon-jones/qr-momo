import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/success');
  };
  return (
    <div>
      <form>
        <div>
          <span> Name </span>
          <br />
          <input type="text" className="form-control" id="email" required />
        </div>
        <div className="mt-2">
          <span> Email </span>
          <br />
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mt-2">
          <span> phone number </span>
          <br />
          <input type="number" className="form-control" id="email" required />
        </div>
        <div className="mt-2">
          <span> Password </span>
          <br />
          <input type="password" className="form-control" id="email" required />
        </div>
        <div className="mt-2">
          <span> Country </span>
          <br />
          <select className="select-control">
            <option value="cameroon">Cameroon</option>
            <option value="nigeria">Nigeria</option>
          </select>
        </div>
        <button type="button" onClick={handleClick} className="btn-primary mt-2"> Register </button>
      </form>
    </div>
  );
};

export default SignupForm;
