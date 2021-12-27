import instance from './instance';

const APPLICATION_JSON = 'application/json';

const TodosAPI = {
  getAllTodos() {
    return instance
      .get('/api/todo')
      .then(response => response.data)
      .then(data => data.data.map(todo => ({
        name: todo.name,
        subTasks: todo.subTasks.map(subTask => ({
          label: subTask.label,
          id: subTask._id,
          isChecked: subTask.isChecked,
        })),
        id: todo._id,
      })),
      );
  },

  postTodo(task) {
    return instance
      .post(
        '/api/todo',
        { task },
        {
          headers: {
            'Content-Type': APPLICATION_JSON,
          },
        },
      )
      .then(response => response.data)
      .then(data => ({
        name: data.data.name,
        isActive: data.data.isActive,
        subTasks: data.data.subTasks.map(subTask => ({
          label: subTask.label,
          id: subTask._id,
          isChecked: subTask.isChecked,
        })),
        id: data.data._id,
      }));
  },

  deleteTodo(task) {
    return instance.delete(`/api/todos/${task.id}`).then(response => response.data);
  },

  editTask(task) {
    return instance
      .put(
        `/api/todo/${task.id}`,
        { task },
        {
          headers: {
            'Content-Type': APPLICATION_JSON,
          },
        },
      )
      .then(response => response.data)
      .then(data => {
        return {
          name: data.data.name,
          isActive: data.data.isActive,
          subTasks: data.data.subTasks.map(subTask => ({
            label: subTask.label,
            id: subTask._id,
            isChecked: subTask.isChecked,
          })),
          id: data.data._id,
        };
      });
  },
};
export default TodosAPI;
