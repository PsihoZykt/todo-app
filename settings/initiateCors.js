const cors = require('cors');

module.exports = initiateCors = (app) => {
  const corsOptions = {
    origin: true,
    credentials: true,
  };
  app.use(cors(corsOptions));

};
