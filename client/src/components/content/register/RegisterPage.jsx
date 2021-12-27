/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  createUser } from '../../../redux/authReducer';
import s from './register.module.css';
import RegisterForm from './RegisterForm';
import { useAlert } from 'react-alert';

const RegisterPageContainer = props => {
  let alert = useAlert()
  const onSubmit = formData => {
    props
      .createUser(formData.username, formData.email, formData.password)
      .then((res) => {
        console.log(res)
        if(res.user) {
          alert.success(res.message)
          props.history.push('/')
        } else {
          alert.error(res.message)
        }
      });

  };
  return <RegisterPage onSubmit={onSubmit} {...props} />;
};
const RegisterPage = props => {

  return (
    <div className={`${s.registerWrapper}`}>
      register
      <RegisterForm onSubmit={props.onSubmit}/>
      <span role="link" tabIndex={0} onClick={() => props.history.push('/login')}>
        back to login{' '}
      </span>
    </div>
  );
};

export default connect(
  null,
  {
    createUser
  },
)(withRouter(RegisterPageContainer));
