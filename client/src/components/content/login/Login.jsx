import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useAlert } from 'react-alert';
import { login } from '../../../redux/authReducer';
import s from './login.module.css';


const Login = (props) => {
  return (
    <div className={`${s.loginWrapper}`}>
      <LoginForm onSubmit={props.onSubmit}/>
      <GoToRegisterPage history={props.history}/>
    </div>
  );
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
const LoginContainer = (props) => {
  const alert = useAlert();
  const onSubmit = ({
    username,
    email,
    password
  }) => {
    props.login((username = ''), email, password)
      .then((res) => {
        if (res.user) {
          alert.success(res.message);
          props.history.push('/tasks');
        } else {
          alert.error(res.message);
        }
      })
      .catch((err) => {
        alert.error(err);
      });
  };
  return <Login onSubmit={onSubmit} {...props} />;
};

export default connect(
  null,
  {
    login,
  },
)((withRouter(LoginContainer)));

