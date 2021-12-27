const Todo = require('../../models/todoModel');

const getTodo = (req, todo = new Todo()) => {
  console.log(req.body)
  const newTodo = todo;
  newTodo.name = req.body.task.name;
  newTodo.subTasks = req.body.task.subTasks
    ? req.body.task.subTasks
    : todo.subTasks;
  newTodo.uid = req.session.user._id;
  return newTodo;
};

module.exports = getTodo;
