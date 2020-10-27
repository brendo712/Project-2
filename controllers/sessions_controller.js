const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

router.get('/new', (req, res) => {
  res.render('sessions/new.ejs', {currentUser: req.session.currentUser})
})

router.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (err,foundUser) => {
    if (err) {
      console.log(err)
      res.send('Problem with db!')
    } else if (!foundUser) {
      res.send('<a href="/">No user found</a>')
    } else {
      if (bcrypt.compareSync(req.body.password, foundUser.password)) {
        req.session.currentUser = foundUser
        res.redirect('/')
      } else {
        res.send('<a href="/">Password does not match!</a>')
      }
    }
  })
})

router.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

module.exports = router
