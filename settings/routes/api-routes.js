const router = require('express').Router();
const todoController = require('../../controllers/todoController');

// router.get('/', (req, res) => {
//   res.json({
//     status: 'API Its Working',
//     message: 'Welcome to RESTHub crafted with love!',
//   });
// });

router
  .route('/')
  .get(todoController.index)
  .post(todoController.new);
router
  .route('/:id')
  .put(todoController.update)
  .delete(todoController.delete);
module.exports = router;
