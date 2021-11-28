import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { formValueSelector } from 'redux-form';
import Task from './task';
import { toggleTaskActive, postTask, deleteTask } from '../../../redux/navReducer';
import mapArrayToElements from '../../../util/utility';
import TaskBar from './TaskBar';
import Login from '../login/index';

const TaskBarContainer = props => {
  const { tasks } = props;
  const [filteredTasks, setFilteredTasks] = useState([...tasks]);
  useEffect(() => {
    let filter = '';
    if (props.searchField) filter = props.searchField;
    setFilteredTasks(
      tasks.filter(task => {
        if (task.name.search(filter) !== -1) return true;
        return false;
      }),
    );
  }, [props]);

  useEffect(() => {
    if (!tasks) return <Login />;
    // tasks.forEach(task => {
    //   if (task.isActive) {
    //     props.history.push(`/tasks/id/${task.id}`);
    //     return null;
    //   }
    // });
  }, [props.tasks]);

  const onTaskClick = task => props.toggleTaskActive(task);
  const onTaskAdded = task => props.postTask(task);
  const onTaskRemoved = task => props.deleteTask(task);

  const taskElements = mapArrayToElements(filteredTasks, Task, onTaskClick, onTaskRemoved);

  return (
    <>
      <TaskBar taskElements={taskElements} onTaskAdded={onTaskAdded} />{' '}
    </>
  );
};
const selector = formValueSelector('searchTask');

const mapStateToProps = state => ({
  tasks: state.navReducer.tasks,
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
