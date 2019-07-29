// api-routes.js
// Initialize express router
const router = require('express').Router();
// Import todo controller
const todoController = require('./controllers/todoController');
// todo routes
// Set default API response


router.get('/', (req, res) => {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub crafted with love!',
  });
});


router
  .route('/todos')
  .get(todoController.index)
  .post(todoController.new);
router
  .route('/todos/:id')
  //   .get(todoController.view)
  //   .patch(todoController.update)
  .put(todoController.update)
  .delete(todoController.delete);
// Export API routes
module.exports = router;
