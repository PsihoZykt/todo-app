const mongoose = require('mongoose');
const addSessionsToApp = require('./addSessionsToApp');

const mongoSettings = require('./mongoSettings');

module.exports = (app) => {
  addSessionsToApp(app);
  try {
    mongoose.connect(
      mongoSettings.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
  } catch (e) {
    console.log(e);
  }
  const db = mongoose.connection;

  if (!db) {
    throw new Error('Database wasn\'t connected');
  } else {
    console.log('Database connected successfully');
  }
};
