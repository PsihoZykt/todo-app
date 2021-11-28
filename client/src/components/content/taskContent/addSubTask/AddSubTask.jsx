import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './addSubTask.module.css';

const AddSubTask = props => {
  const { onSubtaskAdded, task } = props;
  const onSubmit = formData => {

    onSubtaskAdded(task, formData.label);
  };
  return (
    <div className={s.inputWrapper}>
      <div className="input-group mb-3">
        <AddSubTaskFormRedux onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default AddSubTask;

const AddSubTaskForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="form-inline input-group mb-3" onSubmit={handleSubmit}>
      <Field
        component="input"
        type="text"
        name="label"
        className="form-control"
        placeholder="SubTask name"
        aria-label="SubTask name"
        aria-describedby="basic-addon2"
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

const AddSubTaskFormRedux = reduxForm({ form: 'addSubTask' })(AddSubTaskForm);
