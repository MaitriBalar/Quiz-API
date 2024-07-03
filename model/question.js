const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Questions = new Schema({
  que : String,
  option : [String],
  answer : String,
  category : {
    type : mongoose.Schema.Types.ObjectId,
    ref : "category"
  }
});

const User = mongoose.model('question', Questions);

module.exports = User;
