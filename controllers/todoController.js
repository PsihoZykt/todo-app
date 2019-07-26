// todoController.js
// Import todo  model
const getTodo = require('./util/todo');
Todo = require('../models/todoModel');
// Handle index actions
exports.index = (req, res) => {
  Todo.get((err, todos) => {
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
  Todo.findById(req.params.todo_id, (err, todo) => {
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
exports.update = function (req, res) {
  Todo.findById(req.params.todo_id, (err, todo) => {
    todo = getTodo(req, todo);
    console.log(req.body.task);

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
  });
};
// Handle delete contact
exports.delete = (req, res) => {
  Todo.remove(
    {
      _id: req.params.todo_id,
    },
    (err, todo) => {
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
    },
  );
};
