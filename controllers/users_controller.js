const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

// Create
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

// Show
router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, foundUsers) => {
    res.render('users/show.ejs', {
      users: foundUsers
    })
  })
})

// Edit
router.get('/:id/edit', (req, res)=>{
    User.findById(req.params.id, (err, foundUsers)=>{
        res.render('users/edit.ejs',{
    			users: foundUsers
    		})
    })
})

router.put('/:id', (req, res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedModel)=>{
        res.redirect('/')
    })
})
module.exports = router
