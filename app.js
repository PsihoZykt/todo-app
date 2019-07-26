const express = require('express');
const cool = require('cool-ascii-faces');

const LOCALHOST_URL = 'http://localhost:3000';
const HEROKU_URL = 'https://glacial-cove-89186.herokuapp.com/';
const app = express();
// Import Mongoose
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// Import routes
const apiRoutes = require('./api-routes');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// use it before all route definitions
app.use(cors({ origin: HEROKU_URL }));
app.use('/api', apiRoutes);
app.get('/cool', (req, res) => {
  res.send(cool());
});
// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect(
  'mongodb+srv://psihoz_ykt:Pp89241735187@cluster0-rp2fj.gcp.mongodb.net/todo-app?retryWrites=true&w=majority',
  { useNewUrlParser: true },
);
const db = mongoose.connection;
// Added check for DB connection
if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');

app.listen(process.env.PORT || 3005, () => {
  console.log('Express server listening on port %d in %s mode', (process.env.PORT || 3005), app.settings.env);
});
