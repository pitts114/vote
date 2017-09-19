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
          status: 200,
          id: poll._id,
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
        console.log(results)
        if (results[0]){
              res.json(results)
        }
        else{
          res.json({"status":"There are no polls!"})
        }

      })
  }

  this.findPoll = function(res, id){
    Polls.findOne({"_id": id}).exec((err, results)=>{
      if (err) throw err
      if (results){
        res.json(results)
      }
      else {
        res.json({"status": "No poll found with that id"})
      }
    })
  }

  this.vote = function(res, id, choice){
    /*
    var fieldStr = "choices." + choice
    Polls.findOneAndUpdate({"_id":id, choices:choice}, {$inc: {fieldStr: 1}}).exec((err, results)=>{
      res.send()
      console.log(results)
    })
    */
    Polls.findOneAndUpdate({"_id":id, "choices.choice":choice}, {$inc: {"choices.$.votes": 1}}, {new:true}).exec((err, results)=>{
      res.json(results)
    })
  }

  this.deletePoll = function(res, id){
    Polls.remove({"_id":id}).exec((err, results)=>{
      if (results.result.n === 0){
        res.json({"status": "Poll does not exist: No poll was deleted."})
      }
      else {
        res.json({"status": "Poll deleted."})
      }
    })
  }

}

module.exports = PollHandler
