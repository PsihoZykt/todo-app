// todoController.js
// Import todo  model
const { ObjectID } = require('mongodb'); // or ObjectID
const getTodo = require('./util/todo');
const Todo = require('../models/todoModel');
// Handle index actions
exports.index = (req, res) => {
  // let userId = null;
  // if (req.session.user) userId = req.session.user._id;
  console.log('index');
  Todo.find({ uid: req.session.user._id }, (err, todos) => {
    console.log(todos);
    if (err) {
      res.status(400).send({
        status: 'error',
        message: err,
      });
    } else {
      res.status(200).send({
        status: 'success',
        message: 'Todos retrieved successfully',
        data: todos,
      });
    }
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

// TODO : UPDATE OTHER FIND ONE AND UPDATE
// THEY RETURN OLD DOCUMENT
// Handle update contact info
exports.update = (req, res) => {
  const todo = req.body.task;
  Todo.updateMany({}, { $set: { isActive: false } }, (err, resps) => {
    Todo.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { isActive: true, subTasks: todo.subTasks } },
      { new: true },
      (err, resp) => {
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
      },
    );
  });
};
// Handle delete contact
exports.delete = (req, res) => {
  console.log('delete');
  Todo.remove({ _id: req.params.id }, (err, todo) => {
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
