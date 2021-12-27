const apiRoutes = require('./api-routes');
const usersRoutes = require('./users-routes');
const initiateBodyParser = require('./initiateBodyParser');
// For some reasons body parses should be initiated before using routes
module.exports = (app) => {
  initiateBodyParser(app);
  app.use('/api/todo', apiRoutes);
  app.use('/api/user', usersRoutes);
};
