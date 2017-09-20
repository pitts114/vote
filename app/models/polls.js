var mongoose = require("mongoose")
var Schema = mongoose.Schema
var shortid = require("shortid")

var Poll = new Schema({
  _id: {
    type: String, "default":shortid.generate
  },
  title: String,
  choices: [{choice: String, votes: Number}],
  voters: [String]
}, { versionKey: false })

module.exports = mongoose.model("Poll", Poll)
