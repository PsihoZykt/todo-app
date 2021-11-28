import s from './task.module.css';

const _isAllSubTasksDone = subTasks => {
  let flag = true;
  subTasks.forEach(element => {
    if (!element.isChecked) flag = false;
  });
  return flag;
};
// eslint-disable-next-line import/prefer-default-export
export const getTaskClass = task => {
  return `nav-link ${s.task} ${
    _isAllSubTasksDone(task.subTasks) ? `${s.done}` : `${s.undoneTask}`
  }`;
};
