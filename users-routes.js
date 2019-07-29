const router = require('express').Router();
const api = require('./controllers/userController');
/* Создание пользователя */
router.post('/login', (req, res, next) => {
  if (req.session.user) {
    const user = {
      id: req.session.user._id,
      email: req.session.user.email,
      username: req.session.user.username,
    };
    res.status(200).send({ user, message: 'YOu are in account ' });
    return;
  }
  console.log(req.body);
  api.checkUser(req.body)
    .then((user) => {
      if (user) {
        req.session.user = user;
        const newUser = {
          id: user._id,
          email: user.email,
          username: user.username,
        };
        console.log(req.session.user);
        res.status(200).send({ user: newUser, message: 'Auth success' });
        console.log('user is valid');
      } else {
        console.log('user is not vald');
        res.status(500).send({ message: 'Error in check user' });

        return next(error);
      }
    })
    .catch(error => next(error));

  return null;
});


router.post('/', (req, res) => {
  console.log('User create process');
  console.log(req.body);
  api.createUser(req.body)
    .then((result) => {
      console.log(`result in createUser ${result}`);
      res.status(200).send({
        user: result,
        message: 'user created',
      });
      console.log('User created');
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: 'error' });
    });
});

router.post('/logout', (req, res, next) => {
  if (req.session.user) {
    delete req.session.user;
    res.status(200).send({ message: 'logout sucess' });
  }
});

router.get('/auth', (req, res, next) => {
  if (req.session.user) {
    const user = {
      id: req.session.user._id,
      email: req.session.user.email,
      username: req.session.user.username,
    };
    res.status(200).send({ user, message: 'YOu are in account ' });
  } else {
    res.status(400).send({ message: 'Need to log in' });
  }
});


module.exports = router;
