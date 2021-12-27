const cors = require('cors');

module.exports = (app) => {
  const corsOptions = {
    origin: true,
    credentials: true,
  };
  app.use(cors(corsOptions));
};
