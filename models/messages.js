const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
	author: { type: String, required: true },
  subject: String,
  message: String
  })

const Message = mongoose.model('Message', messageSchema)

module.exports = Message
