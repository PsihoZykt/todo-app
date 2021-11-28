import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './addTask.module.css';

const AddTask = ({ onTaskAdded }) => {
  const OnTaskSubmitted = ({ newTaskBody }) => {
    onTaskAdded({ name: newTaskBody });
  };

  return (
    <div className={`input-group mb-3 wrapper ${s.wrapper}`}>
      <AddTaskFormRedux onSubmit={OnTaskSubmitted} />
    </div>
  );
};

const AddTaskForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="form-inline input-group mb-3" onSubmit={handleSubmit}>
      <Field
        component="input"
        className="form-control"
        placeholder="Task name"
        aria-label="Task name"
        aria-describedby="basic-addon2"
        name="newTaskBody"
      />
      <div className="input-group-append">
        <button type="submit" className={s.invisibleButton}>
          <span className={`input-group-text ${s.addonInForm}`} id="basic-addon2">
            <i className="fa fa-check-circle-o" />
          </span>
        </button>
      </div>
    </form>
  );
};

const AddTaskFormRedux = reduxForm({ form: 'addTask' })(AddTaskForm);

export default AddTask;
