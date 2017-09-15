var mongoose = require("mongoose")
var Schema = mongoose.Schema

var Poll = new Schema({
  pollTitle: String, choices: [{choiceTitle: String, votes: Number}]
})

module.exports = mongoose.model("Poll", Poll)
