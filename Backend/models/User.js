const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  phoneNumber: String
});

module.exports = User = mongoose.model('user', userSchema);
