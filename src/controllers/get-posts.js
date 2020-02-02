const Post = require('../model/Post.js');

module.exports = async (req, res) => {
  res.send(await Post.find());
};
