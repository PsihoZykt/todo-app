// todoController.js
// Import todo  model
const getTodo = require('./util/todo');
const Todo = require('../models/todoModel');
// Handle index actions
exports.index = (req, res) => {
  Todo.find({ uid: req.session.user._id }, (err, todos) => {
    if (err) {
      console.log('Todos werent found. Error' + err);
      res.status(500)
        .send({
          status: 'error',
          message: `Error while finding todo ${err}`,
        });
    } else {
      console.log('Todos found successfully');
      res.status(200)
        .send({
          status: 'success',
          message: 'Todos retrieved successfully',
          data: todos,
        });
    }
  });
};
// Handle create contact actions
exports.new = (req, res) => {
  const todo = getTodo(req);
  // save the contact and check for errors
  todo.save((err) => {
    if (err) {
      console.log('Can\'t create todo. Error');
      res.status(500)
        .send({
          status: 'error',
          message: `Error while saving todo ${err}`,
        });
    } else {
      console.log('Todo created successfully');
      res.status(201)
        .send({
          status: 'success',
          message: 'Todo posted successfully',
          data: todo,
        });
    }
  });
};
// Handle view contact info
exports.view = (req, res) => {

  Todo.findById(req.params.id, (err, todo) => {
    if (err) {
      console.log('Todo can\'t be found by ID. Error' + err);
      res.status(500)
        .send({
          status: 'error',
          message: err,
        });
    } else {
      console.log('Todo by ID was successively found');
      res.status(200)
        .send({
          status: 'success',
          message: 'Todo retrieved successfully',
          data: todo,
        });
    }
  });
};


exports.update = (req, res) => {
  const todo = req.body.task;
  Todo.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        subTasks: todo.subTasks,
      },
    },
    { new: true },
    (err, resp) => {
      if (err) {
        console.log('Trying to update todo is Error ' + err);
        res.status(500)
          .send({
            status: 'error',
            message: err,
          });
      } else {
        console.log('Todo is successfully updated');
        res.status(200)
          .send({
            status: 'success',
            message: 'Todo updated successfully',
            data: resp,
          });
      }
    },
  );
};
// Handle delete contact
exports.delete = (req, res) => {
  Todo.remove({ _id: req.params.id }, (err, todo) => {
    if (err) {
      console.log('Todo can\'t be deleted. Error' + err);

      res.status(500)
        .send({
          status: 'error',
          message: err,
        });
    } else {
      console.log('Todo was deleted successfully');
      res.status(200)
        .send({
          status: 'success',
          message: 'Todo deleted successfully',
          data: todo,
        });
    }
  });
};
