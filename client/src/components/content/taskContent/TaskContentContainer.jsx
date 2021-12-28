import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addSubtask, toggleSubTaskChecked, removeSubtask } from '../../../redux/navReducer';
import SubTask from './subTask';
import TaskContent from './TaskContent';

const TaskContentContainer = props => {
  const { tasks, match } = props;
  const onChecked = (task, id, isChecked) => props.toggleSubTaskChecked(task, id, isChecked);
  const onSubtaskAdded = (task, label) => {
    props.addSubtask(task, label);
  };
  const onSubtaskRemoved = (task, id) => {
    console.log("onSubTaskRemoved", task, id)
    props.removeSubtask(task, id);
  };

  const { id } = match.params;
  const task = tasks.find(t => t.id === id);

  if (!id || !task) {
    return null
  } else {
    const subTasks = task.subTasks.map(subTask => {
      return <SubTask task={task} label={subTask.label} id={subTask.id} isChecked={subTask.isChecked} onChecked={onChecked} onSubtaskRemoved={onSubtaskRemoved} />
    })
    return <TaskContent task={task} subTasks={subTasks} onSubtaskAdded={onSubtaskAdded} />;
  }


};

const mapStateToProps = state => ({
});
export default connect(
  null,
  {
    addSubtask,
    toggleSubTaskChecked,
    removeSubtask,
  },
)(withRouter(TaskContentContainer));
