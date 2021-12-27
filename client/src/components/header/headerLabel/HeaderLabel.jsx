import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Logout from '../../content/login/logout';
import s from './headerLabel.module.css';

export default function HeaderLabel(props) {
  let {isAuth, currentUser, history, logout, location} = props;
  return (
    <>
      {isAuth && currentUser && <UserLabel clearTasks={props.clearTasks} location={location} currentUser={currentUser} logout={logout} />}
      <Route exact path="/login" render={() => <LoginLabel isAuth={isAuth} history={history} />} />
      <Route
        exact
        path="/register"
        render={() => <RegisterLabel isAuth={isAuth} history={history} />}
      />
    </>
  );
}

const LoginLabel = ({ isAuth, history }) => {
  return (
    <div>
      {!isAuth && (
        <span tabIndex={0} role="link">
          login
        </span>
      )}
    </div>
  );
};

const RegisterLabel = ({ isAuth, history }) => {
  return (
    <div>
      {!isAuth && (
        <span tabIndex={0} role="link">
          Registration
        </span>
      )}
    </div>
  );
};

export const UserLabel = (props) => {
  return (
    <>
       <div className="col">
         {  <SearchForm initialValues={{ searchField: '' }} s /> }
      </div>

      <div className="col">
        <NavLink to="/tasks" className={s.currentUser}> {`current user is ${props.currentUser.username} `}</NavLink>
      </div>
      <div className="col">
        <span className={s.logout}>
          <Logout logout={props.logout} clearTasks={props.clearTasks}/>
        </span>
      </div>
    </>
  );
};

const SearchForm = reduxForm({ form: 'searchTask' })(props => {
  return (
    <span>
      <Field
        className={`form-control ${s.searchForm}`}
        component="input"
        name="searchField"
        placeholder="searchTask"
      />
    </span>
  );
});
