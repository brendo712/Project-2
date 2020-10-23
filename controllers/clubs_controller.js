const express = require('express')
const router = express.Router()
const Club = require('../models/clubs.js')

const isAuthenticated = (req, res, next) => {
  if(req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

router.get('/new', (req, res) => {
  res.render('clubs/new.ejs')
})

router.post('/', isAuthenticated, (req, res) => {
  Club.create(req.body, (err, createdFruit) => {
    res.redirect('clubs')
  })
})

router.get('/', (req, res) => {
  Club.find({}, (err, allClubs) => {
    res.render('clubs/index.ejs', {
      clubs: allClubs
    })
  })
})

router.get('/seed', (req, res) => {
  Club.create([

  ], (err, data) => {
    res.redirect('/clubs')
  })
})

router.get('/:id', isAuthenticated, (req, res) => {
  Club.findById(req.params.id, (err, foundClubs) => {
    res.render('clubs/show.ejs', {
      club: foundClub,
    })
  })
})

router.get('/:id/edit', (req, res) => {
  Club.findById(req.params.id, (err, foundClub) => {
    res.render('clubs/edit.ejs', {
      club: foundClub
    })
  })
})

router.put('/:id', isAuthenticated, (req, res) => {
  Club.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updateModel) => {
    res.redirect('/clubs')
  })
})

router.delete('/:id', isAuthenticated, (req, res) => {
  Club.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('clubs')
  })
})

module.exports = router