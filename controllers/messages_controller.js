const express = require('express')
const router = express.Router()
const Message = require('../models/messages.js')
const User = require('../models/users.js')

const isAuthenticated = (req, res, next) => {
  if(req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

router.get('/', (req, res) => {
    Message.find({}, (err, allMessages) => {
        res.render('./home.ejs', {
            messages: allMessages,
            currentUser: req.session.currentUser
        })
    })
})

router.get('/', (req, res) => {
  res.render('./home.ejs', {currentUser: req.session.currentUser})
})

router.post('/', isAuthenticated, (req, res) => {
  Message.create(req.body, (err, createMessage) => {
    console.log('Message is created', createMessage)
    res.redirect('/')
  })
})



module.exports = router
