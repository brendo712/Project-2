const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const session = require('express-session')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT
const mongodbURI = process.env.MONGODBURI


// Middleware to help with form submission
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static('public'))

// Sessions
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
)
// Mongoose connection code
mongoose.connect(mongodbURI, { useNewUrlParser: true})
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo')
})

// Require Controllers
const clubsController = require('./controllers/clubs_controller.js')
app.use('/clubs', clubsController)
const usersController = require('./controllers/users_controller.js')
app.use('/users', usersController)
const sessionsController = require('./controllers/sessions_controller.js')
app.use('/sessions', sessionsController)
const messagesController = require('./controllers/messages_controller.js')
app.use('/', messagesController)

// GET HOME ROUTE
app.get('/', (req, res) => {
  res.render('home.ejs', {currentUser: req.session.currentUser})
})

// Bind and listen to PORT
app.listen (PORT, ()=>{
  console.log('listening')
})
