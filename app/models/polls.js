var mongoose = require("mongoose")
var Schema = mongoose.Schema

var Poll = new Schema({
  polls: [{pollTitle: String, choices: [{choiceTitle: String, votes: Number}}]
})

module.exports = mongoose.model("Poll", Poll)
