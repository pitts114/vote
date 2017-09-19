var express = require("express")
var routes = require("./app/routes/index.js")
var bodyParser = require("body-parser")
var session = require("express-session")
var mongoose = require("mongoose")
var passport = require("passport")
var path = process.cwd()
require('dotenv').load();

var app = express()
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI)

routes(app, express, passport)


var port = process.env.PORT || 8080
app.listen(port, ()=>{
  console.log("Server is now listening on port " + port)
})
