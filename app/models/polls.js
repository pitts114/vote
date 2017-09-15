var mongoose = require("mongoose")
var Schema = mongoose.Schema

var Poll = new Schema({
  title: String, choices: [{choice: String, votes: Number}]
}, { versionKey: false })

module.exports = mongoose.model("Poll", Poll)
