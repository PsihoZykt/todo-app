import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setTasks, getTasks, clearTasks } from '../../redux/navReducer';
import { logout, setUserSession, checkAuth } from '../../redux/authReducer';
import s from './header.module.css';
import HeaderLabel from './headerLabel';

let Header = (props) => {

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
      getTasks,
      checkAuth,
      setUserSession
    },
  )(Header),
);
