import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../../../redux/authReducer';
import { clearTasks } from '../../../../redux/navReducer';

const Logout = (props) => {
  return (
    <span tabIndex={0} role="button" onClick={props.onLogout}>
    Logout
  </span>
  );
};
const LogoutContainer = (props) => {
  let onLogout = () => {
    props.logout();
    props.clearTasks();
  };
  return <Logout onLogout={onLogout} {...props} />;
};

export default connect(null, {
  logout,
  clearTasks
})(withRouter(LogoutContainer));
