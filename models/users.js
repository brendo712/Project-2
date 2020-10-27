const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: String,
  name: {type: String},
  location: {type: String},
  club: {type: String},
  player: {type: String}
})

const User = mongoose.model('User', userSchema)

module.exports = User
