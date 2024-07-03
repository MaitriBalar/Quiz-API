const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Categories = new Schema({
  name : String,
  image : String
});

const User = mongoose.model('category', Categories);

module.exports = User;