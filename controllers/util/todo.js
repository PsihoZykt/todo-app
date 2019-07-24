const getTodo = (req, todo = new Todo()) => {
  todo.name = req.body.task.name;
  todo.isActive = req.body.task.isActive
    ? req.body.task.isActive
    : todo.isActive;
  todo.subTasks = req.body.task.subTasks
    ? req.body.task.subTasks
    : todo.subTasks;

  return todo;
};

module.exports = getTodo;
