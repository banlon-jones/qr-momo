import React from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import cameroonFlag from '../../images/Cameroon.jpg';
import nigeriaFlag from '../../images/nigeria-flag.jpg';

const SignupForm = () => {
  const countries = [
    {
      value: 'cameroon',
      label: '+237',
      img: cameroonFlag,
    },
    {
      value: 'nigeria',
      label: '+234',
      img: nigeriaFlag,
    },
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/success');
  };
  return (
    <div>
      <div>
        <h3> Registration </h3>
        <p className="my-md-5">
          Enter your validate name and MTN mobile money account number
        </p>
      </div>
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
          <div className="row">
            <div className="col-4 p-2">
              <span> Country </span>
              <Select
                options={countries}
                formatOptionLabel={(country) => (
                  <div className="country-option">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={country.img} height="20" width="30" alt="country-image" />
                    <span>
                      {country.label}
                    </span>
                  </div>
                )}
              />
            </div>
            <div className="col-8">
              <div className="mt-2">
                <span> Phone number </span>
                <br />
                <input type="number" className="form-control" id="email" required />
              </div>
            </div>
          </div>
        </div>
        <button type="button" onClick={handleClick} className="btn btn-primary col-12 mt-2"> Register </button>
      </form>
    </div>
  );
};

export default SignupForm;
