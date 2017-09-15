var Polls = require("../models/polls.js")

function PollHandler() {
  this.newPoll = function(res, title, choices){

    var choicesArr = choices.map((element)=>{
      return {choice: element, votes: 0}
    })

    var poll = new Polls({
      title: title,
      choices: choicesArr
    })

    poll.save((err)=>{
      if (err){
        console.log("Something went wrong when saving the poll")
        res.json({
          status: "error"
        })
        throw (err)
      }
      else {
        res.json({
          status: "200",
          title: title,
          choices: choices
        })
      }
    })
  }

  this.findAllPolls = function(res) {
    Polls.find({},{"choices._id": false})
      .exec((err, results)=>{
        if (err){
          console.log("Error finding all polls")
          throw err
        }
        res.json(results)
      })
  }

}

module.exports = PollHandler
