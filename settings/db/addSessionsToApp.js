const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const MONGO_URL = 'mongodb+srv://psihoz_ykt:Pp89241735187@cluster0-rp2fj.gcp.mongodb.net/todo-app?retryWrites=true&w=majority';

module.exports = addSessionsToApp = (app) => {
  app.use(
    session({
      secret: 'i need more beers',
      resave: false,
      saveUninitialized: false,
      // Место хранения можно выбрать из множества вариантов, это и БД и файлы и Memcached.
      store: new MongoStore({
        url:
        MONGO_URL,
      }),
    }),
  );

};
