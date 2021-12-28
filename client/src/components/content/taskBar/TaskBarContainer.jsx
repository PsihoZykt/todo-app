import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { formValueSelector } from 'redux-form';
import Task from './task';
import { toggleTaskActive, postTask, deleteTask } from '../../../redux/navReducer';
import TaskBar from './TaskBar';
import Login from '../login/index';

const TaskBarContainer = props => {
  const { tasks, searchField } = props;

  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  useEffect(() => {
    if (!tasks) return <Login/>;
    setFilteredTasks(
      tasks.filter(task => {
        return task.name.search(searchField) !== -1;
      }),
    );
  }, [props.tasks, searchField]);

  const onTaskClick = task => props.toggleTaskActive(task);
  const onTaskAdded = task => props.postTask(task);
  const onTaskRemoved = task => props.deleteTask(task);

  // const taskElements = mapArrayToElements(filteredTasks, Task, onTaskClick, onTaskRemoved);
 const taskElements = filteredTasks.map(task => {
 return  <Task task={task} key={task.id} onTaskClick={onTaskClick} onTaskRemoved={onTaskRemoved}/>
 })
  return (
    <>
      <TaskBar taskElements={taskElements} onTaskAdded={onTaskAdded}/>{' '}
    </>
  );
};
const selector = formValueSelector('searchTask');

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  searchField: selector(state, 'searchField'),
});
export default connect(
  mapStateToProps,
  {
    toggleTaskActive,
    postTask,
    deleteTask,
  },
)(withRouter(TaskBarContainer));
