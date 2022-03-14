import React from 'react';
import BtnPrimary from '../buttons/Btn-primary';

const SigninForm = () => (
  <div>
    <form>
      <div>
        <span> Email </span>
        <br />
        <input type="text" className="form-control" id="email" required />
      </div>
      <div className="mt-2">
        <span> Password </span>
        <br />
        <input type="password" className="form-control" id="email" required />
      </div>
      <div className="mt-4">
        <BtnPrimary value="Register" />
      </div>
    </form>
  </div>
);

export default SigninForm;
