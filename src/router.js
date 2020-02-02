const { Router } = require('express');
const router = Router();

const getPostsController = require('./controllers/get-posts.js');
const getPostController = require('./controllers/get-post.js');
const createPostController = require('./controllers/create-post.js');
const deletePostController = require('./controllers/delete-post.js');
const updatePostController = require('./controllers/update-post.js');

router
  .route('/')
  .get(getPostsController)
  .post(createPostController);

router
  .route('/:_id')
  .get(getPostController)
  .delete(deletePostController)
  .put(updatePostController);

router
  .get('*', (req, res) => res.status(404).send('Страница не найдена'));

module.exports = router;