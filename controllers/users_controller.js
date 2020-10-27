const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

router.get('/new', (req, res) => {
  res.render('users/new.ejs', {currentUser: req.session.currentUser})
})

router.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createUser) => {
    console.log('User is created', createUser)
    res.redirect('/')
  })
})

module.exports = router
