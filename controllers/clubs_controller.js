const express = require('express')
const router = express.Router()
const Club = require('../models/clubs.js')
const Clubs = require('../models/seed_clubs.js')

const isAuthenticated = (req, res, next) => {
  if(req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

//  Index
router.get('/', (req, res) => {
  Club.find({}, (err, allClubs) => {
    res.render('clubs/index.ejs', {
      clubs: allClubs,
      currentUser: req.session.currentUser
    })
  })
})

// Create
router.get('/new', (req, res) => {
  res.render('clubs/new.ejs', {currentUser: req.session.currentUser})
})

router.post('/', isAuthenticated, (req, res) => {
  Club.create(req.body, (err, createdClub) => {
    res.redirect('/clubs')
  })
})


// Seed
router.get('/seed', (req, res) => {
  Club.insertMany(Clubs, (err, data) => {
    res.redirect('/clubs')
  })
})

// Show
router.get('/:id', isAuthenticated, (req, res) => {
  Club.findById(req.params.id, (err, foundClub) => {
    res.render('clubs/show.ejs', {
      club: foundClub,
      currentUser: req.session.currentUser
    })
  })
})

// Edit
router.get('/:id/edit', (req, res) => {
  Club.findById(req.params.id, (err, foundClub) => {
    res.render('clubs/edit.ejs', {
      club: foundClub,
      currentUser: req.session.currentUser
    })
  })
})

router.put('/:id', isAuthenticated, (req, res) => {
  Club.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
    res.redirect('/clubs')
  })
})

// Delete
router.delete('/:id', isAuthenticated, (req, res) => {
  Club.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/clubs')
  })
})

module.exports = router
