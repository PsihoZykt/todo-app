import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getTasks } from '../../../redux/navReducer';
import { login } from '../../../redux/authReducer';
import s from './login.module.css';
import withAuth from '../../../hoc/withAuth';


const Login = (props) => {
  return (
    <div className={`${s.loginWrapper}`}>
      <LoginForm onSubmit={props.onSubmit}/>
      <GoToRegisterPage history={props.history}/>
    </div>
  )
};
const GoToRegisterPage = props => {
  return (
    <div tabIndex={0} role="button"
         onClick={() => props.history.push('/register')}>
      Not register yet?
      Register now!
    </div>
  );
};
const LoginWrapper = (props) => {
  // if (props.isAuth) return <Redirect to="/"/>;
  const onSubmit = ({
    username,
    email,
    password
  }) => props.login((username = ''), email, password)
    .then(() => props.getTasks())
    .then(() => props.history.push('/tasks'))
    .catch((err) => {
      // return <Redirect to="/login"/>;
    });
  return <Login onSubmit={onSubmit} {...props} />;
};
// const mapStateToProps = state => ({
//   isAuth: state.authReducer.isAuth,
// });

export default connect(
  // mapStateToProps,
  null,
  {
    login,
    getTasks
  },
)((withRouter(LoginWrapper)));

