// todoModel.js
const mongoose = require('mongoose');

const { Schema } = mongoose;
// Setup schema
const todoSchema = mongoose.Schema({
  id: { type: mongoose.Schema.ObjectId },
  name: {
    type: String,
    required: true,
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
  uid: {
    type: Schema.Types.ObjectId,
    required: false,
  },
});
// Export Todo model
const Todo = (module.exports = mongoose.model('todo', todoSchema));
module.exports.get = function (callback, limit) {
  Todo.find(callback).limit(limit);
};
