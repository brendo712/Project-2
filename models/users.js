const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
  username: {type: String, unique: true, required: true},
  password: String,
  name: {type: String},
  location: {type: String},
  club: {type: String},
  player: {type: String}
})

const User = mongoose.model('User', userSchema)

module.exports = User
