// Initialize express router
const router = require('express').Router();
const userController = require('./controllers/userController');

router.route('/auth').get(userController.auth);
router.route('/logout').delete(userController.logout);
router.route('/register').post(userController.create);
router.route('/login').post(userController.login);
module.exports = router;
