import React from 'react';
import DonedTodos from './donedTodos/DonedTodos';
import s from './taskContent.module.css';
import AddSubTask from './addSubTask';

const TaskContent = props => {
  const { task, subTasks, onSubtaskAdded } = props;
  return (
    <div className={`col-sm-8 ${s.taskContent}`}>
      <AddSubTask task={task} onSubtaskAdded={onSubtaskAdded} />
      <ul className="list-group">{subTasks}</ul>
      <DonedTodos task={task} />
    </div>
  );
};

export default TaskContent;
