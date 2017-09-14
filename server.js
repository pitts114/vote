var express = require("express")
var routes = require("./app/routes/index.js")
var session = require("express-session")
var mongoose = require("mongoose")
var passport = require("passport")
require('dotenv').load();

var app = express()

app.use("/", express.static(__dirname + '/public'))

var port = process.env.PORT || 5000
app.listen(port, ()=>{
  console.log("Server is now listening on port " + port)
})
