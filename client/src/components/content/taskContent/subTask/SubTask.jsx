import React from 'react';
import s from './subTask.module.css';

const SubTask = props => {
  const {
    subtask: { label, id, isChecked },
    children,
  } = props;

  const [task, onChecked, onSubtaskRemoved] = children;

  return (
    <span
      className={`${s.subTask} list-group-item  d-flex justify-content-between align-items-center
      `}
    >
      <span
        onClick={() => onChecked(task, id, !isChecked)}
        className={`${s.subTaskLabel} ${isChecked ? `${s.checked}` : ''}`}
      >
        {' '}
        {label}
      </span>

      <i
        role="button"
        tabIndex={0}
        onClick={() => onSubtaskRemoved(task, id)}
        className={`fa fa-times ${s.removeButton}`}
      />
    </span>
  );
};

export default SubTask;
