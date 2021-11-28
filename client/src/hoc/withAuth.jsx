import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../components/content/login/Login';

const mapStateToPropsForRedirect = state => ({
  isAuth: state.authReducer.isAuth,
});

const withAuthRedirect = Component => {
  // eslint-disable-next-line react/prefer-stateless-function
  class RedirectComponent extends React.Component {
    render() {
      const { isAuth } = this.props;
      if (!isAuth) {
        return <Login />
        // return <Redirect to="/login"/>;
      } else {
        return <Component {...this.props} />;
      }
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
export default withAuthRedirect;
