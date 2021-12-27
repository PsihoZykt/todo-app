const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoSettings = require('./mongoSettings');

module.exports = (app) => {
  app.use(
    session({
      secret: 'i need more beers',
      resave: false,
      saveUninitialized: false,
      // Место хранения можно выбрать из множества вариантов, это и БД и файлы и Memcached.
      store: new MongoStore({
        url: mongoSettings.MONGO_URL,
      }),
    }),
  );

};
