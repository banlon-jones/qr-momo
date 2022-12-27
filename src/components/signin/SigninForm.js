import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/firebase/firebaseReducer';

const SigninForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(loginUser(data));
    if (!user.user) {
      alert(' wrong credentials ');
    } else {
      navigate('/dashboard');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span> Email </span>
          <br />
          <input
            type="text"
            className="form-control"
            id="email"
            required
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...register('email',
              { require: true })}
          />
        </div>
        <div className="mt-4">
          <span> Password </span>
          <br />
          <input
            type="password"
            className="form-control"
            id="password"
            required
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...register('password',
              { require: true })}
          />
        </div>
        <div className="mt-4 pt-5 pt-md-1">
          <button className="btn w-100 btn-primary" type="submit"> Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
