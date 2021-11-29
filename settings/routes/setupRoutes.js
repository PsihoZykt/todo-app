const apiRoutes = require('../api-routes');
const usersRoutes = require('./routes/users-routes');

module.exports = (app) => {
  app.use('/api', apiRoutes);
  app.use('/api', usersRoutes);
};
