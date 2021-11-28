import React from 'react';
import { getDoneProcent, getNumberOfDone } from './util';

const DonedTodos = ({ task }) => {
  if (!task) return <></>;
  console.log(getDoneProcent(task));

  const barStyle = {
    width: `${getDoneProcent(task)}%`,
  };
  const textInBarStyle = {
    color: `${getDoneProcent(task) === 0 ? '#007bff' : 'white'}`,
    padding: '10px',
  };
  const barWrapper = {
    height: '2em',
    margin: '10px',
  };
  return (
    <div>
      <div style={barWrapper} className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={barStyle}
          aria-valuenow={getDoneProcent(task)}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <span style={textInBarStyle}>
            {`  ${getNumberOfDone(task)}  from ${task.subTasks.length}   is done`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DonedTodos;
