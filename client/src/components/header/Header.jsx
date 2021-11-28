import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TodosAPI from '../../api/TodosAPI';
import { setTasks } from '../../redux/navReducer';
import { logout, setUserSession } from '../../redux/authReducer';
import s from './header.module.css';
import UsersAPI from '../../api/UsersAPI';
import HeaderLabel from './headerLabel';

let Header = (props) => {
  useEffect(() => {
    UsersAPI.isAuth()
      .then(data => props.setUserSession(data.user))
      .then(() => TodosAPI.getAllTodos())
      .then(data => {
        return props.setTasks(data);
      })
      .catch(err => console.log(err));
  }, [props.isAuth]);

  const {
    isAuth,
    currentUser,
    history
  } = props;
  return (
    <div className={`row ${s.header}`}>
      <HeaderLabel
        isAuth={isAuth}
        currentUser={currentUser}
        logout={props.logout}
        history={history}
        {...props}
      />
    </div>
  );

};
const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  currentUser: state.authReducer.currentUser,
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      setTasks,
      logout,
      setUserSession
    },
  )(Header),
);
