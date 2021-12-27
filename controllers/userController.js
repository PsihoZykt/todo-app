const {
  checkUser,
  createUser,
} = require('./util/user');
// User API

exports.auth = (req, res) => {
 console.log(req.session.user)
  if (req.session.user) {
    const user = {
      id: req.session.user._id,
      email: req.session.user.email,
      username: req.session.user.username,
    };
    res.status(200)
      .send({
        user,
        message: 'YOu are in account ',
      });
  } else {
    res.status(403)
      .send({
        user: null,
        message: 'Need to log in'
      });
  }
};

exports.logout = (req, res) => {
  if (req.session.user) {
    delete req.session.user;
    res.status(200)
      .send({
        user: null,
        message: 'logout success'
      });
  }
};

exports.create = (req, res) => {
  console.log('create route', req.body);
  createUser(req.body)
    .then((result) => {
      console.log(`result in createUser ${result}`);
      res.status(200)
        .send({
          user: result,
          message: 'user created',
        });
      console.log('User created');
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
        .send({
          user: null,
          message: `Error in creating user. THe error is ${err}`,
        });
    });
};

exports.login = (req, res, next) => {

  if (req.session && req.session.user) {
    const user = {
      id: req.session.user._id,
      email: req.session.user.email,
      username: req.session.user.username,
    };
    res.status(200)
      .send({
        user,
        message: 'YOu are in account ',
      });
    return;
  }
  checkUser(req.body)
    .then((user) => {
      // if (user) {
      const newUser = {
        _id: user._id,
        email: user.email,
        username: user.username,
      };
      req.session.user = newUser;
      res.status(200)
        .send({
          user: newUser,
          message: 'Successful  login',
        });
      console.log('user is valid');

    })
    .catch(e => {
      console.log(e)
      res.status(403)
        .send({
          user: null,
          message: e,
        })
    });
};
