import React from 'react';
import AddTask from './addTask';
import s from './taskBar.module.css';

const TaskBar = ({ taskElements, onTaskAdded }) => (
  <div className={`col-sm-4 ${s.taskBar}`}>
    <ul className="nav nav-pills flex-column">
      <AddTask onTaskAdded={onTaskAdded} />
      {taskElements}
    </ul>
  </div>
);

export default TaskBar;
