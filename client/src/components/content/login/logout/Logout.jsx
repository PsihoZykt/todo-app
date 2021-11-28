import React from 'react';
import { withRouter } from 'react-router-dom';

const Logout = (props) => {
  let onLogout = () => {
    props.logout()

  }
  return(

    <span tabIndex={0} role="button" onClick={onLogout}>
    Logout
  </span>
  );
}

export default withRouter(Logout);
