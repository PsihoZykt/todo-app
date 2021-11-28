import { Field, reduxForm } from 'redux-form';
import React from 'react';

const RegisterForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="inputEmail">Username</label>
        <Field
          component="input"
          name="email"
          placeholder="email"
          className="form-control"
          id="inputEmail"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputUsername">Username</label>
        <Field
          component="input"
          placeholder="username"
          name="username"
          className="form-control"
          id="inputUsername"
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
        Register
      </button>
    </form>
  );
};

export default  reduxForm({ form: 'register' })(RegisterForm);
