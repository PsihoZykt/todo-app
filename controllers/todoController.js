// todoController.js
// Import todo  model
const getTodo = require('./util/todo');
const Todo = require('../models/todoModel');

// Handle index actions
exports.index = (req, res) => {
  console.log('index');
  Todo.find({ uid: req.session.user._id }, (err, todos) => {
    if (err) {
      res.status(400).send({
        status: 'error',
        message: err,
      });
    }
    res.status(200).send({
      status: 'success',
      message: 'Todos retrieved successfully',
      data: todos,
    });
  });
};
// Handle create contact actions
exports.new = (req, res) => {
  console.log('new');
  const todo = getTodo(req);
  // save the contact and check for errors
  todo.save((err) => {
    if (err) {
      res.status(400).send({
        status: 'error',
        message: err,
      });
    } else {
      res.status(200).send({
        status: 'success',
        message: 'Todo posted successfully',
        data: todo,
      });
    }
  });
};
// Handle view contact info
exports.view = (req, res) => {
  console.log('view');

  Todo.findById(req.params.id, (err, todo) => {
    if (err) {
      res.status(400).send({
        status: 'error',
        message: err,
      });
    } else {
      res.status(200).send({
        status: 'success',
        message: 'Todo retrieved successfully',
        data: todo,
      });
    }
  });
};
// Handle update contact info
exports.update = (req, res) => {
  const todo = req.body.task;

  Todo.updateMany({ isActive: true }, { $set: { isActive: false } }, () => {
    Todo.findByIdAndUpdate(req.params.id, { $set: { isActive: true, subTasks: todo.subTasks } }, (err, resp) => {
      console.log(todo.subTasks);
      console.log('------------');
      console.log(resp);

      if (err) {
        res.status(400).send({
          status: 'error',
          message: err,
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Todo updated successfully',
          data: resp,
        });
      }
    });
  });
};
// Handle delete contact
exports.delete = (req, res) => {
  console.log('delete');
  Todo.remove({ _id: req.params.id },
    (err, todo) => {
      if (err) {
        res.status(400).send({
          status: 'error',
          message: err,
        });
      } else {
        res.status(200).send({
          status: 'success',
          message: 'Todo deleted successfully',
          data: todo,
        });
      }
    });
};
