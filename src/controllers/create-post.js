const Post = require('../model/Post.js');

module.exports = async (req, res) => {
  const { title, categories, content } = req.body;
  const post = new Post({ title, categories, content });
  await post.save();
  res.status(200).send('Пост создан');
};
