const Todo = require('../../models/todoModel');

const getTodo = (req, todo = new Todo()) => {
  const newTodo = todo;
  newTodo.name = req.body.task.name;
  newTodo.isActive = req.body.task.isActive ? req.body.task.isActive : todo.isActive;
  newTodo.subTasks = req.body.task.subTasks ? req.body.task.subTasks : todo.subTasks;
  newTodo.uid = req.session.user._id;
  console.log(req.session.user._id);

  return newTodo;
};

module.exports = getTodo;
