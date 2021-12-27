import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Login from '../components/content/login/Login';
import { checkAuth } from '../redux/authReducer';

const mapStateToPropsForRedirect = state => ({
  isAuth: state.authReducer.isAuth,
});

const withAuthRedirect = Component => {

  // eslint-disable-next-line react/prefer-stateless-function
   let RedirectComponent = (props) => {
     useEffect(() => {
       props.checkAuth()
     },[props.isAuth])
      const { isAuth } = props;
      if (!isAuth) {
        return <Login />
        // return <Redirect to="/login"/>;
      } else {
        return <Component {...props} />;
      }
  }

  return connect(mapStateToPropsForRedirect, {checkAuth})(RedirectComponent);
};
export default withAuthRedirect;
