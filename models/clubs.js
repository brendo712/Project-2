const mongoose = require('mongoose')

const clubSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    wins: {type: Number},
    draws: {type: Number},
    losses: {type: Number},
    points: {type: Number},
    position: {type: Number}
    })

const Club = mongoose.model('Club', clubSchema)

module.exports = Club
