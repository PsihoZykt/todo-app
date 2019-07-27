const router = require('express').Router();
const api = require('./controllers/userController');
/* Создание пользователя */
router.post('/login', (req, res, next) => {
  if (req.session.user) {
    res.status(200).send({ message: 'YOu are in account ' });
    return;
  }

  api.checkUser(req.body)
    .then((user) => {
      if (user) {
        req.session.user = { id: user._id, name: user.name };
        res.status(200).send({ message: 'Auth success' });
        // res.redirect('/');
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
  api.createUser(req.body)
    .then((result) => {
      console.log(result);
      res.status(200).send({
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
    res.redirect('/');
  }
});

module.exports = router;
