import React from 'react';
import { useForm } from 'react-hook-form';

const SigninForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
            id="email"
            required
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...register('password',
              { require: true })}
          />
        </div>
        <div className="mt-4">
          <button className="btn w-100 btn-primary" type="submit"> Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
