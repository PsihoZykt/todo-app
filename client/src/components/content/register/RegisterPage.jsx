/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { login, createUser } from '../../../redux/authReducer';
import s from './register.module.css';
import RegisterForm from './RegisterForm';
const RegisterPageWrapper = props => {
  const onSubmit = formData => {
    props
      .createUser(formData.username, formData.email, formData.password)
      .then(data => {
        if (data.status === 200) {
          return props
            .login(formData.username, formData.email, formData.password)
            .then(() => props.history.push('/'));
        }
        throw new Error('Registration error');
      })
      .catch(err => {
        console.log(err)
      });
  };
  return  <RegisterPage  onSubmit={onSubmit} {...props} />
}
const RegisterPage = props => {

  return (
    <div className={`${s.registerWrapper}`}>
      register
      <RegisterForm onSubmit={props.onSubmit} />
      <span role="link" tabIndex={0} onClick={() => props.history.push('/login')}>
        back to login{' '}
      </span>
    </div>
  );
};

export default connect(
  null,
  { login, createUser },
)(withRouter(RegisterPageWrapper));
