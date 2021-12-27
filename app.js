const express = require('express');
const connectToDB = require('./settings/db/connectToMongo');
const initiateCors = require('./settings/initiateCors');
const enableProductionMode = require('./settings/enableProductionMode');
const startApp = require('./settings/startApp');
const setupRoutes = require('./settings/routes/setupRoutes');

const app = express();
try {
  // The order is important, don't break the order! But should fix this
  connectToDB(app);
  setupRoutes(app);
  enableProductionMode(app);
  initiateCors(app);
  startApp(app);
} catch (e) {
  console.log(e);
}
