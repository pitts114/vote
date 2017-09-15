var express = require("express")
var routes = require("./app/routes/index.js")
var session = require("express-session")
var passport = require("passport")
var path = process.cwd()
require('dotenv').load();

var app = express()

routes(app, express)


var port = process.env.PORT || 8080
app.listen(port, ()=>{
  console.log("Server is now listening on port " + port)
})
