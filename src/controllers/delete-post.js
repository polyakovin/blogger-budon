const Post = require('../model/Post.js');

module.exports = async (req, res) => {
  const { _id } = req.params;
  const post = await Post.findOne({ _id });

  if (post) {
    await post.deleteOne({ _id });
    res.status(200).send(`Пост "${_id}" удален`);
  } else {
    res.status(404).send(`Поста с _id="${_id}" не существует`);
  }
};
