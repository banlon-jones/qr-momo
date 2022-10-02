import React from 'react';

const SigninForm = () => (
  <div>
    <form>
      <div>
        <span> Email </span>
        <br />
        <input type="text" className="form-control" id="email" required />
      </div>
      <div className="mt-4">
        <span> Password </span>
        <br />
        <input type="password" className="form-control" id="email" required />
      </div>
      <div className="mt-4">
        <button className="btn w-100 btn-primary" type="button"> Sign in </button>
      </div>
    </form>
  </div>
);

export default SigninForm;
