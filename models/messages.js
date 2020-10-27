const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = Schema({
  title:  { type: String, required: true },
	author: { type: String, required: true },
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
  })

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
