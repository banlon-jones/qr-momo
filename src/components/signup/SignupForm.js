import React from 'react';
import BtnPrimary from '../buttons/Btn-primary';

const SignupForm = () => (
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
      <div className="mt-2">
        <BtnPrimary value="Login" />
      </div>
    </form>
  </div>
);

export default SignupForm;
