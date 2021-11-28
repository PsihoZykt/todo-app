import React from 'react';
import { withRouter } from 'react-router-dom';
import s from './removeTask.module.css';

class RemoveTask extends React.Component {
  onTaskRemoved = this.props;

  componentWillUnmount() {
    // SHould be placed in removeTask action
    // But work only here, idk why
    // Redirrect to root after task removed
    const { history } = this.props;
    history.push('/tasks');
  }

  onRemoveButtonClicked = (task) => {
    const { onTaskRemoved } = this.props;
    onTaskRemoved(task);
  };

  render() {
    return (
      <i
        onClick={() => {
          this.onRemoveButtonClicked(this.props.task);
        }}
        className={`fa fa-times ${s.removeTask}`}
      />
    );
  }
}
export default withRouter(RemoveTask);
