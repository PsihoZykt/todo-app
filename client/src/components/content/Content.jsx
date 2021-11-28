import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './content.module.css';
import withAuthRedirect from '../../hoc/withAuth';
import TaskBar from './taskBar';
import TaskContentContainer from './taskContent';

const Content = (props) => (
  <div className={`row ${s.content}`}>
    <TaskBar />
    <Route path={[`/tasks/id/:id?`, '/']} render={() => <TaskContentContainer />} />
  </div>
);

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
});
export default withAuthRedirect(withRouter(connect(mapStateToProps)(Content)));
