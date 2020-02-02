const Post = require('../model/Post.js');

module.exports = async (req, res) => {
  const { _id } = req.params;
  const post = await Post.findOne({ _id });

  if (post) {
    res.send(post);
  } else {
    res.status(404).send(`Пост с id="${_id}" не найден`);
  }
};
