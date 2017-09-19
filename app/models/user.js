var mongoose = require("mongoose")
var Schema = mongoose.Schema
var shortid = require("shortid")


var User = new Schema ({
  github: {
    id: String,
    displayName: String,
    username: String,
    publicRepos: Number
  },
  polls:
})
