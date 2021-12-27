import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import s from './content.module.css';
import withAuthRedirect from '../../hoc/withAuth';
import TaskBar from './taskBar';
import TaskContentContainer from './taskContent';
import { getTasks } from '../../redux/navReducer';

const Content = (props) => {

  useEffect(() => {
      console.log(props);
      if(props.isAuth) {
        props.getTasks();
      }
    },
    [props.isAuth]);
  return (
    <div className={`row ${s.content}`}>
      <TaskBar tasks={props.tasks}/>
      <Route path={[`/tasks/id/:id?`, '/']}
             render={() => <TaskContentContainer tasks={props.tasks}/>}/>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  tasks: state.navReducer.tasks,
});
export default withAuthRedirect(withRouter(connect(mapStateToProps, { getTasks })(Content)));
