import React from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import cameroonFlag from '../../images/Cameroon.jpg';
import nigeriaFlag from '../../images/nigeria-flag.jpg';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
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
  // const navigate = useNavigate();
  /* const handleClick = () => {
    navigate('/success');
  }; */
  const onSubmit = (data) => {
    console.log(data);
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
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input type="text" className="form-control" {...register('name', { required: true })} />
          <div className="text-danger">
            {errors.name && <span>This field is required</span>}
          </div>
        </div>
        <div className="mt-2">
          <span> Email </span>
          <br />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input type="email" className="form-control" {...register('email', { required: true })} />
        </div>
        <div className="mt-2">
          <span> Password </span>
          <br />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <input type="password" className="form-control" {...register('password', { required: true })} />
        </div>
        <div className="mt-2">
          <div className="row">
            <div className="col-4 p-2">
              <span> Country </span>
              <Select
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...register('countryCode', { required: true })}
                options={countries}
                formatOptionLabel={(country) => (
                  <div className="country-option">
                    <img src={country.img} height="20" width="30" alt="country" />
                    <span>
                      {country.label}
                    </span>
                  </div>
                )}
              />
            </div>
            <div className="col-8">
              <div className="mt-2">
                <span> phone number </span>
                <br />
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <input type="number" className="form-control" {...register('number', { required: true })} />
              </div>
            </div>
          </div>
        </div>
        <input type="submit" onClick={handleSubmit(onSubmit)} className="btn btn-primary col-12 mt-2" value="Register" />
      </form>
    </div>
  );
};

export default SignupForm;
