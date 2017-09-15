var Polls = require("../models/polls.js")

function PollHandler() {

  this.newPoll = function(res) {
    Polls.findOne({}).exec((err, result)=>{
      if (!result) {
        var poll = new Polls({
          pollTitle: "What's your favorite flavor?",
          choices: [
            {choiceTitle: "Chocolate", votes: 0},
            {choiceTitle:"Vanilla", votes: 0}
          ]
        })

        poll.save((err)=>{
          if (err){
            console.log("Error: Couldn't save document to database!")
            throw err
          }
        })
      }
      else {
        console.log("Poll already exists!")
        console.log(result)
      }
    })
  }

  this.findAllPolls = function(res) {
    Polls.find({},{'_id': false,"_v":false, "choices._id": false})
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
