const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);

(async () => await mongoose.connect('mongodb+srv://kbudon:123@cluster0-xio00.mongodb.net/test?retryWrites=true&w=majority'))();

module.exports = mongoose.model('User', new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  categories: {
    type: String
  },
  content: {
    type: String,
    required: true
  }
}));
