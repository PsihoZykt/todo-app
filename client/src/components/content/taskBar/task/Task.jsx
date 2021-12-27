import React from 'react';
import { NavLink } from 'react-router-dom';
import RemoveTask from './RemoveTask/RemoveTask';
import s from './task.module.css';
import { getTaskClass } from './util';

const Task = props => {
  const { task, onTaskClick, onTaskRemoved } = props;
  console.log(props)
  return (
    <div className={s.wrapper}>
      <li>
        <div className="nav-item">
          <NavLink
            isActive={() => task.isActive}
            className={getTaskClass(task)}
            to={`/tasks/id/${task.id}`}
            onClick={() => onTaskClick(task)}
          >
            {task.name}

            <RemoveTask task={task} onTaskRemoved={onTaskRemoved} />
          </NavLink>
        </div>
      </li>
    </div>
  );
};

export default Task;
