import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../store/firebase/firebaseReducer';
import Loader from '../loader/Loader';

const SignupForm = () => {
  const dispatch = useDispatch();
  const userStore = useSelector((state) => state.user);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();
  if (userStore.isLoading) {
    return <Loader />;
  }
  const onSubmit = (data) => {
    dispatch(registerUser(data));
    if (userStore.user) {
      navigate('/success');
    }
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
              <br />
              <select
                className="form-control"
                name="country"
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...register('countryCode', { required: true })}
              >
                <option value="+237"> CMR </option>
                <option value="+234"> NGR </option>
              </select>
            </div>
            <div className="col-8">
              <div className="mt-2">
                <span> phone number </span>
                <br />
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <input type="number" className="form-control" {...register('phone', { required: true })} />
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
