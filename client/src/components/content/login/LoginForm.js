import { Field, reduxForm } from 'redux-form';
import React from 'react';

let LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <Field
          component="input"
          name="email"
          placeholder="email"
          className="form-control"
          id="inputEmail"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputPassword">Password</label>
        <Field
          component="input"
          placeholder="password"
          name="password"
          type="password"
          className="form-control"
          id="inputPassword"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};
LoginForm = reduxForm({ form: 'login' })(LoginForm);
export default LoginForm
