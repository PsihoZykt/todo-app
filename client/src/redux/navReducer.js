import TodosAPI from '../api/TodosAPI';

const CLEAR_TASKS = 'CLEAR_TASKS';
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const SET_TASKS = 'SET_TASKS';
const EDIT_TASK = 'EDIT_TASK';
const TOGGLE_IS_ACTIVE = 'TOGGLE_IS_ACTIVE';
const initialState = {
  tasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {

    case SET_TASKS: {
      return {
        ...state,
        tasks: action.tasks
      };
    }
    case ADD_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, action.task],
      };
    }
    case EDIT_TASK: {
      let newTasks = [...state.tasks];
      newTasks = newTasks.map(task => {
        let newTask = { ...task };
        if (newTask.id === action.task.id) {
          newTask = action.task;
        }
        return newTask;
      });
      return {
        ...state,
        tasks: newTasks
      };
    }
    case REMOVE_TASK: {
      const taskIdx = state.tasks.findIndex(task => task.id === action.task.id);
      const newTasks = [...state.tasks.filter((elem, idx) => idx !== taskIdx)];
      return {
        ...state,
        tasks: newTasks
      };
    }
    case TOGGLE_IS_ACTIVE: {
      let newTasks = [...state.tasks];
      newTasks = newTasks.map(task => {
        let newTask = { ...task };
        if (newTask.id === action.task.id) {
          newTask = action.task;
        } else {
          newTask.isActive = false;
        }
        return newTask;
      });
      return {
        ...state,
        tasks: newTasks
      };
    }
    case CLEAR_TASKS: {
      return {
        ...state,
        tasks: [] };
    }

    default:
      return state;
  }
};

export const addTask = task => ({
  type: ADD_TASK,
  task,
});

export const removeTask = task => ({
  type: REMOVE_TASK,
  task,
});
export const toggleIsActive = task => ({
  type: TOGGLE_IS_ACTIVE,
  task,
});
export const setTasks = tasks => ({
  type: SET_TASKS,
  tasks,
});

export const editTask = task => ({
  type: EDIT_TASK,
  task,
});
export const clearTasksState = () => ({
  type: CLEAR_TASKS
})
// Thunks
export const postTask = task => dispatch => {
  TodosAPI.postTodo(task)
    .then(todo => {
      const newTask = {
        id: todo.id,
        name: todo.name,
        isActive: todo.isActive,
        subTasks: todo.subTasks,
      };
      return dispatch(addTask(newTask));
    })
    .catch(err => console.log(err));
};
export const getTasks = () => dispatch => {
  TodosAPI.getAllTodos()
    .then(data => dispatch(setTasks(data)))
    .catch(err => console.log(err));
};
export const deleteTask = task => dispatch => {
  TodosAPI.deleteTodo(task)
    .then(() => dispatch(removeTask(task)))
    .catch(err => console.log(err));
};

export const toggleTaskActive = task => dispatch => {
  const newTask = { ...task };
  newTask.isActive = !task.isActive;
  dispatch(toggleIsActive(newTask));
};
export const clearTasks = () => dispatch => {
  dispatch(clearTasksState())
}
export const addSubtask = (task, label) => dispatch => {
  const newTask = { ...task };
  newTask.subTasks = [...task.subTasks];
  newTask.subTasks.push({
    label,
    isChecked: false
  });
  return TodosAPI.editTask(newTask)
    .then(data => {
      return dispatch(editTask(data));
    });
};

export const toggleSubTaskChecked = (task, id, isChecked) => dispatch => {

  const newTask = { ...task };
  newTask.subTasks = newTask.subTasks.map(subTask => {
    const newSubTask = { ...subTask };
    if (newSubTask.id === id) newSubTask.isChecked = isChecked;
    return newSubTask;
  });
  return TodosAPI.editTask(newTask)
    .then(data => dispatch(editTask(data)));
};

export const removeSubtask = (task, id) => dispatch => {
  const newTask = { ...task };
  newTask.subTasks = newTask.subTasks.filter(subTask => subTask.id !== id);
  return TodosAPI.editTask(newTask)
    .then(data => {
      return dispatch(editTask(data));
    });
};

