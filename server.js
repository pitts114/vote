var express = require("express")
var routes = require("./app/routes/index.js")
var bodyParser = require("body-parser")
var session = require("express-session")
var mongoose = require("mongoose")
var passport = require("passport")
var path = process.cwd()
require('dotenv').load();
require("./app/config/passport.js")(passport)

var app = express()
app.use(bodyParser.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(process.env.MONGO_URI)

routes(app, express, passport)


var port = process.env.PORT || 8080
app.listen(port, ()=>{
  console.log("Server is now listening on port " + port)
})
