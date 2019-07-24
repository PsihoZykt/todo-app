const express = require('express');
const app = express();
const mongo = require('./db/mongo');
// Import Mongoose
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// Import routes
const  apiRoutes = require('./api-routes');


app.use(bodyParser.json()); // support json encoded bodies
app.use(
  bodyParser.urlencoded({ extended: true }),
); // support encoded bodies
// use it before all route definitions
app.use(
  cors({ origin: 'http://localhost:3000' }),
);
app.use('/api', apiRoutes);

// Connect to Mongoose and set connection variable
// Deprecated: mongoose.connect('mongodb://localhost/resthub');
mongoose.connect(
  'mongodb+srv://psihoz_ykt:Pp89241735187@cluster0-rp2fj.gcp.mongodb.net/todo-app?retryWrites=true&w=majority',
  { useNewUrlParser: true },
);
var db = mongoose.connection;
// Added check for DB connection
if (!db) console.log('Error connecting db');
else console.log('Db connected successfully');

app.listen(3005, function() {
  console.log(
    'Example app listening on port 3005!',
  );
});
