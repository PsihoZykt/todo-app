const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
};
