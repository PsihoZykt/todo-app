const mongoose = require('mongoose');
const addSessionsToApp = require('./addSessionsToApp');
const MONGO_URL = 'mongodb+srv://psihoz_ykt:Pp89241735187@cluster0-rp2fj.gcp.mongodb.net/todo-app?retryWrites=true&w=majority';
// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');

module.exports = (app) => {
  addSessionsToApp(app);
  mongoose.connect(
    MONGO_URL,
    { useNewUrlParser: true },
  );
  const db = mongoose.connection;
  // Added check for DB connection
  if (!db) {
    console.log('Error connecting db');
  } else {
    console.log('Db connected successfully');
  }
};
