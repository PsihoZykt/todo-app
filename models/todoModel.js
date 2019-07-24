// todoModel.js
var mongoose = require('mongoose');
// Setup schema
var todoSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: false,
  },
  subTasks: [
    {
      label: {
        type: String,
        required: true,
      },
      isChecked: {
        type: Boolean,
        required: false,
      },
    },
  ],
});
// Export Todo model
var Todo = (module.exports = mongoose.model(
  'todo',
  todoSchema,
));
module.exports.get = function(callback, limit) {
  Todo.find(callback).limit(limit);
};
