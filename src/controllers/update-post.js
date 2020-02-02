const Post = require('../model/Post.js');

module.exports = async (req, res) => {
  const { _id } = req.params;
  const { title, categories, content } = req.body;
  const post = await Post.findOne({ _id });

  if (!Post) {
    res.status(404).send(`Поста с id="${_id}" не существует`);
  }

  post.title = title || post.title;
  post.categories = categories || post.categories;
  post.content = content || post.content;
  await post.save();
  res.status(200).send('Пост успешно обновлён')
};
